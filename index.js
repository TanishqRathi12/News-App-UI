const main = document.getElementById('article-cont');
const article = document.createElement('article');

let data;
let datalength = 0;
async function getData(){
    const result = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json");
    const res = await result.json();
    data = res.articles;
    datalength = data.length;
    console.log(data);
    renderUI();
}   
getData();

function renderUI(){
    for(let i=0;i<datalength;i++){
        const article = document.createElement('article');
        article.innerHTML=`
        <a href="${data[i].url}" target=_blank style="color: rgb(0, 0, 0);">
        <img class="Article-img" src="${data[i].urlToImage}" alt="Article image">     
        <div class="article-content" >
            <h2>
               ${data[i].title}
            </h2>
            <p>
                ${data[i].description}
            </p>
            
        </a>
        </div>
        `;
        main.appendChild(article);
       
    }
        
}

