let postsArr=[]

function renderpost(){
        let html = ""
        for (let post of postsArr) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
        }
        document.getElementById("blog-list").innerHTML = html
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postsArr=data.slice(0,5)
         renderpost()
    })

    document.getElementById("new-blog").addEventListener("submit",function(e){
        e.preventDefault()
        const postTitle=document.getElementById("blog-title").value
        const postBody=document.getElementById("blog-body").value
        const data={
            title:postTitle,
            body:postBody
        }
        
        const option={
            method:"POST",
            body:JSON.stringify(data),
            headers:{"Content-Type":"application/json"}
        }

        fetch("https://apis.scrimba.com/jsonplaceholder/posts",option)
        .then(res=>res.json())
        .then(post => {
          postsArr.unshift(post)
          renderpost()
        })

        document.getElementById("new-blog").reset();
    })