import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {MantineProvider} from "@mantine/core";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MantineProvider theme={{
            globalStyles: (theme) => (
                {
                    respectReducedMotion: false,
                    body: {
                        ...theme.fn.fontStyles(),
                        backgroundColor: 'black',
                        color: 'white',
                        lineHeight: theme.lineHeight,
                    },


                    '.your-class': {
                        backgroundColor: 'red',
                    },

                    '#your-id > [data-active]': {
                        backgroundColor: 'pink',
                    },
                }),
        }}
                         withGlobalStyles withNormalizeCSS>
            <App/>
        </MantineProvider>
    </React.StrictMode>,
)
