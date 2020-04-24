document.querySelector('#getOne').addEventListener('click',getOne);

document.querySelector('#getAll').addEventListener('click',getAll);

function getOne(){
    var id = document.getElementById('postid').value;
    var url ="https://jsonplaceholder.typicode.com/posts/"+id;
    var xhr = new XMLHttpRequest();

    xhr.open('GET',url,true);
    xhr.onload = function(){

        if(this.status === 200){
            var post = JSON.parse(this.responseText);

            var html="";        

            html += `
              <div class="card mb-2">
                <div class="card-header">
                    ${post.id}-${post.title}
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                    <p> ${post.body}</p>                 
                    </blockquote>
                </div>
              </div>            
            `;
     
            document.querySelector('#results').innerHTML = html;


        }

    }
    xhr.send();

}


function getAll(){
    var url = "https://jsonplaceholder.typicode.com/posts";
    var xhr = new XMLHttpRequest();

    xhr.open('GET',url,true);
    xhr.onload = function(){

        if(this.status === 200){
            var posts = JSON.parse(this.responseText);

            var html="";

            posts.forEach(post => {

            html += `
              <div class="card mb-2">
                <div class="card-header">
                    ${post.title}
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                    <p> ${post.body}</p>                 
                    </blockquote>
                </div>
              </div>            
            `;

        });
            document.querySelector('#results').innerHTML = html;


        }

    }
    xhr.send();


}