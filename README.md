# Upload.ia - Web

<video width="400" height="500" src="https://github.com/Snarloff/uploadai-web/assets/46792575/d5bfad10-5fe4-4b96-86a6-154b1e229eac" type="video/mp4" controls>
</video>

Este é o repositório da parte web do projeto Upload.ia, que faz parte das séries de vídeos da NLW da Rocketseat. O Upload.ia é um site que permite aos usuários fazer upload de um arquivo de vídeo no formato .mp4 e, por meio da tecnologia WebAssembly e do FFmpeg, transforma o vídeo em um arquivo de áudio otimizado. Posteriormente, esse arquivo de áudio é enviado para a API, onde é utilizado o Whisper, uma IA da OpenAI, para realizar a transcrição automática do áudio.


## Visão Geral

O Upload.ia é uma aplicação composta por duas partes: a parte web (este repositório) e a parte da API (localizada em um repositório separado). A parte web é responsável pelo frontend da aplicação, onde os usuários podem realizar o upload de vídeos e configurar os prompts para a transcrição gerada pela IA da OpenAI.

### Principais Funcionalidades

- Upload de vídeos em formato .mp4.
- Conversão de vídeos em arquivos de áudio otimizados usando WebAssembly e FFmpeg.
- Configuração de prompts para a IA da OpenAI.
- Transcrição de áudio utilizando o Whisper.
- Geração de sugestões de título ou descrição usando o GPT-3.6 Turbo 16k da OpenAI.

### Tecnologias Utilizadas

O projeto da parte web utiliza as seguintes tecnologias:

- [Vite](https://vitejs.dev/): Um build tool para aplicações web modernas em JavaScript.
- [React](https://reactjs.org/): Uma biblioteca JavaScript para construção de interfaces de usuário.
- [WebAssembly](https://webassembly.org/): Uma tecnologia que permite a execução de código de baixo nível no navegador.
- [FFmpeg](https://ffmpeg.org/): Uma coleção de software para manipulação de áudio e vídeo.
- [Tailwind CSS](https://tailwindcss.com/): Um framework de estilo utilitário para projetos web.
- [shadcn](https://shadcn.com/): Um pacote de componentes para criação de interfaces.
- [AI](https://vercel.com/ai): Um pacote desenvolvido pela Vercel para comunicação em streaming com a API da OpenAI.
- [lucide-react](https://lucide.dev/): Uma biblioteca para ícones.
- [ESLint](https://eslint.org/): Linter para JavaScript/TypeScript.
- [Prettier](https://prettier.io/): Formatador de código.
- [@snarloff/eslint-config](https://www.npmjs.com/package/@snarloff/eslint-config): Pacote de configuração ESLint personalizado.

### Instruções de Uso

Siga os passos abaixo para configurar o projeto em sua máquina:

1. Clone este repositório:

   ```shell
   git clone https://github.com/seu-usuario/uploadia-web.git
   ```

2. Navegue até o diretório do projeto:

   ```shell
   cd uploadia-web
   ```

3. Instale as dependências:

   ```shell
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```shell
   npm run dev
   ```

A aplicação estará disponível em `http://localhost:3000`.

### Referência à API e Seed

A parte da API e o arquivo `seed.ts`, que contém a geração dos prompts para a utilização no frontend, estão localizados no repositório da [API](https://github.com/Snarloff/uploadai-api). Certifique-se de consultar o README da API para obter mais informações sobre como configurar e executar a parte do servidor.

## Contribuições

Contribuições são bem-vindas! Se você deseja contribuir para este projeto, siga as diretrizes de contribuição e envie um pull request.

## Problemas e Sugestões

Se você encontrar problemas ou tiver sugestões para melhorar este projeto, por favor, abra uma issue neste repositório.

## Agradecimentos

Agradecemos à Rocketseat por fornecer o conhecimento e os recursos para o desenvolvimento deste projeto.
