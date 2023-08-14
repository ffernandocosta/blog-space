fetch("https://apis.scrimba.com/jsonplaceholder/posts", {method:"GET"})
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        let html = ""
        postsArr.forEach(post => {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `
        })
        document.getElementById("blog-list").innerHTML = html
})