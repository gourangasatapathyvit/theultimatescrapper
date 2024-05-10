import { useEffect, useState } from "react";
import * as cheerio from "cheerio";
// import axios from "axios";

function ProxyComponent() {
    const [htmlContent, setHtmlContent] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                
                // const x = axios.get('https://www.2embed.skin/movie/tt8178634');
                // console.log(x);
                
                const $ = cheerio.load('<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li></ul>');

                setHtmlContent($.html());
            } catch (error) {
                console.error("Error fetching content:", error);
            }
        }

        fetchData();
    }, []);

    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
    // return htmlContent;
}

export default ProxyComponent;
