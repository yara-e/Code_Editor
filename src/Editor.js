import { useState } from 'react';
import Split from 'react-split';


const Editor = () => {
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');

    const handleOutput = () => {
        const iframe = document.getElementById('output');
        iframe.contentDocument.body.innerHTML = html + "<style>" + css + "</style>";

        iframe.contentWindow.eval(js);
    }
    return (
        <>



            <Split className="contanier"
                sizes={[40, 60]}
                minSize={300}
            >

                <div className=" left">

                    <div className='html'>
                        <button
                            className=" btn"
                            id="html"
                            data-bs-toggle="tab"
                            data-bs-target="#html-pane"
                            type="button"
                            role="tab"
                            aria-controls="html-pane"
                            aria-selected="true"
                        >
                            HTML
                        </button>
                        <textarea
                            type="text"
                            className="tab-pane fade show active h-100 w-100"
                            id="html-pane"
                            role="tabpanel"
                            aria-labelledby="html"
                            tabIndex={0}
                            value={html} onChange={(e) => setHtml(e.target.value)}
                            style={{ padding: '10px' }}
                        >

                        </textarea>
                    </div>
                    <div className='css'>
                        <button className='btn'

                            id="css"
                            data-bs-toggle="tab"
                            data-bs-target="#css-pane"
                            type="button"
                            role="tab"
                            aria-controls="css-pane"
                            aria-selected="false"
                        >
                            CSS
                        </button>
                        <textarea
                            type="text"
                            className="tab-pane fade h-100 w-100 "
                            id="css-pane"
                            role="tabpanel"
                            aria-labelledby="css"
                            tabIndex={0}
                            value={css} onChange={(e) => setCss(e.target.value)}
                            style={{ padding: '10px' }}
                        >

                        </textarea>
                    </div>
                    <div className='js'>
                        <button
                            className='btn'
                            id="js"
                            data-bs-toggle="tab"
                            data-bs-target="#js-pane"
                            type="button"
                            role="tab"
                            aria-controls="js-pane"
                            aria-selected="false"
                        >
                            JS
                        </button>
                        <textarea
                            type="text"
                            className="tab-pane fade h-100 w-100 "
                            id="js-pane"
                            role="tabpanel"
                            aria-labelledby="js"
                            tabIndex={0}
                            value={js} onChange={(e) => setJs(e.target.value)}
                            style={{ padding: '10px' }}
                        >

                        </textarea>
                    </div>
                </div>

                <div className=" right">
                    <button className='run' onClick={handleOutput}>Run</button>
                    <iframe

                        id='output'
                        title="output"
                        width="100%"
                        height="100%"

                    ></iframe>
                </div>
            </Split>
        </>
    );
};
export default Editor