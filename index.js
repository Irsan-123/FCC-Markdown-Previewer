
marked.setOptions({
    breaks: true
});

const renderer = new marked.Renderer();

function App() {
    const [text, setText] = React.useState(isitext);
    
    return (
        <div class="diva">
            <h1 className="p-4">My Markdown Previewer</h1><br></br>
            <h3 className="mt-3">Input</h3>
            <textarea
                name="text"
                id="editor"
                rows="10"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="textarea">
            </textarea>
            <h3 className="mt-3">Output</h3>
            <Preview markdown={text} />
        </div>
    );
}

function Preview({ markdown }) {
    return (
        <div class="diva2"
        dangerouslySetInnerHTML={{
            __html: marked(markdown, { renderer: renderer}),
        }}
        id="preview"

        ></div>
    );
        
}
const isitext = `# Contoh h1
## Contoh h2
[Learn more about the freecodecamp.org project](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-drum-machine).

<dl>
  <dt>Definition list</dt>
  <dd>asasassdaa</dd>

  <dt>Markdown in HTML</dt>
  <dd>asdasdaasasda <em>tags</em>.</dd>
</dl>

\`This is an example of inline code\`

\`\`\`\
function exampleOf() {
  return multiLineCodeBlock;
}
\`\`\`\

- Apel
- Jeruk
- Duku
- Durian
- Sirsak
- Anggur
- Orang tua

> This is an example of block quote

![freecodecamp](https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png)

**This is an example of Bolded Text**
`;

ReactDOM.render(<App />, document.getElementById("root"));
