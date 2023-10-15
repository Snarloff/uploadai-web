import { PromptSelect } from '@/components/prompt-select'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider'
import { Textarea } from '@/components/ui/textarea'
import { VideoInputForm } from '@/components/video-input-form'
import { GithubIcon, Wand2Icon } from 'lucide-react'
import { useState } from 'react'

import { ReloadIcon } from '@radix-ui/react-icons'
import { useCompletion } from 'ai/react'

export function App() {
  const [temperature, setTemperature] = useState(0.5)
  const [videoId, setVideoId] = useState<string | null>(null)

  const { input, setInput, handleInputChange, handleSubmit, completion, isLoading } = useCompletion({
    api: 'http://localhost:3333/ai/complete',
    body: {
      videoId,
      temperature,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex items-center justify-between border-b px-6 py-3">
        <h1 className="text-xl font-bold">upload.ai</h1>
        <div className="flex items-center gap-4">
          <span className="text-muted-foreground text-sm">Desenvolvido com 💜 no NLW da Rocketseat</span>
          <Separator orientation="vertical" className="h-6" />
          <Button variant="outline">
            <GithubIcon className="mr-2 h-4 w-4" /> Github
          </Button>
        </div>
      </div>

      <main className="flex flex-1 gap-6 p-6">
        <div className="flex flex-1 flex-col gap-4">
          <div className="grid flex-1 grid-rows-2 gap-4">
            <Textarea
              placeholder="Inclua o prompt para a IA..."
              className="resize-none p-4 leading-relaxed"
              value={input}
              onChange={handleInputChange}
            />
            <Textarea
              readOnly
              placeholder="Resultado gerado pela IA..."
              className="resize-none p-4 leading-relaxed"
              value={completion}
            />
          </div>

          <p className="text-muted-foreground text-sm">
            Lembre-se: você pode utilizar a variável <code className="text-violet-400">{`{transcription}`}</code> no seu prompt
            para adicionar o conteúdo da transcrição do vídeo selecionado.
          </p>
        </div>

        <aside className="w-80 space-y-6">
          <VideoInputForm onVideoUploaded={setVideoId} />
          <Separator />

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label>Prompt</Label>
              <PromptSelect onPromptSelected={setInput} />
            </div>

            <div className="space-y-2">
              <Label>Modelo</Label>
              <Select defaultValue="gpt3.5" disabled>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-muted-foreground block text-xs italic">Você poderá customizar essa opção em breve</span>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Temperatura 🔥</Label>
              <Slider min={0} max={1} step={0.1} value={[temperature]} onValueChange={(value) => setTemperature(value[0])} />

              <span className="text-muted-foreground block text-xs italic leading-relaxed">
                Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros
              </span>
            </div>

            <Separator />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {!isLoading ? (
                <>
                  Executar <Wand2Icon className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Executando... <ReloadIcon className="ml-2 h-4 w-4 animate-spin" />
                </>
              )}
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}
