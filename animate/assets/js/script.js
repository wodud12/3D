    let next = document.querySelector('.next');
        let prev = document.querySelector('.prev');

        // document.querySelector
        // 단일 가져오는 방식

        // document.querySelectorAll
        // item 전체 유사한 것들 모두 가져오는
        // 전체 인 요소를 가져오는 거고
        // ES6
        // 특정요소를 가져올 때 for(let a= 0; a<=item.length; i++)
        
        next.addEventListener('.click',function(){
            let items = document.querySelectorAll('.item');
            //  add ,appendChild
            document.querySelector('.slide').appendChild(items[0]);
        })
        prev,addEventListener('click',function(){
            let items = document.querySelector('.item');
            document.querySelector('.slide').prepend(items[items.length -1]);
            
        })  