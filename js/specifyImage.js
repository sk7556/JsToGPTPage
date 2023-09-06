specifyCity();
        function specifyCity(){ 
            for ( i = 0; i < numberOfDays; i++){
                searchImage(cityPlaceArr[i],3*i,3*i+1,3*i+2);
            }
        }
        
        function searchImage(tourPlace, classNum1, classNum2, classNum3) {
            const searchTerm = tourPlace;
            const apiKey = 'mLZ-RAfNgwAWfURctJYWQLRHrSL63b1jbSF55xKyW4E'; 

            fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${apiKey}`)
                .then(response => response.json())
                .then(data => {
                    displayImage(data.results[0].urls.regular, classNum1);
                    displayImage(data.results[1].urls.regular, classNum2);
                    displayImage(data.results[2].urls.regular, classNum3);
                });
        }

        // 이미지 디스플레이 메서드, appendDiv 로 출력할 객체를 지정 
        function displayImage(imageUrl, number) {
            const placeCard = document.getElementsByClassName('placeCard');
            const image = new Image();
            image.src = imageUrl;
            image.className = 'postImage';            
            placeCard[number].appendChild(image);
        }