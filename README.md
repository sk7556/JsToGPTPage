<h1 align = "center"> 10초만에 세계여행 </h1>

**[ 목차 ]** 
1. [프로젝트 기획](https://github.com/sk7556/JsToGPTPage/blob/main/README.md#1-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B8%B0%ED%9A%8D)
2. [프로젝트 시연](https://github.com/sk7556/JsToGPTPage/blob/main/README.md#2-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%8B%9C%EC%97%B0)
3. [UI 구조](https://github.com/sk7556/JsToGPTPage/blob/main/README.md#3-ui-%EA%B5%AC%EC%A1%B0)
4. [구현 기능](https://github.com/sk7556/JsToGPTPage/blob/main/README.md#4-%EA%B5%AC%ED%98%84-%EA%B8%B0%EB%8A%A5)
5. [데이터 구조](https://github.com/sk7556/JsToGPTPage/blob/main/README.md#5-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B5%AC%EC%A1%B0)
6. [개발 이슈](https://github.com/sk7556/JsToGPTPage/blob/main/README.md#6-%EA%B0%9C%EB%B0%9C-%EC%9D%B4%EC%8A%88)
7. [링크](https://github.com/sk7556/JsToGPTPage#7-%EB%A7%81%ED%81%AC)

# 1. 프로젝트 기획

**[ 서비스 소개 ]**

가고 싶은 여행지와 여행일수를 입력하면 GPT가 생각하는 추천여행지를 소개해주고 여행지의 사진들이 최대 3장 제시되는 서비스입니다


**[ 주제 선정 ]**

GPT AI를 여러번 테스트하며 문장식으로 줄 수 있는 답변을 최대한 활용하기 좋은 데이터로 정리해내고 싶다는 생각을 하였습니다

유저에게 시각적으로 자극을 주고 싶었고, SNS를 보듯이 최소한의 입력으로 화면을 쓱쓱 넘기면서 보는 경험을 제공하고 싶었습니다

지도와 여행과 관련된 소재를 활용하여 여행에 대한 자극을 추가하면 좋겠다는 마음으로 주제를 선정하게 되었습니다

**[ 기술 활용 목표 ]**

HTML / CSS / Javascript 의 기본적인 활용과 

Javascript를 통해 서버와 통신하는 fetch 기능을 활용하여 

GPT AI 의 기능을 활용해내는 페이지를 만들고자 했습니다

추가적으로 현재 비슷한 구조로 Javascript.fetch - API를 제공하는 서비스를 활용해보고 

관련된 이해를 높이는 경험을 하고자 준비했습니다

# 2. 프로젝트 시연
**[ 키워드 입력 및 로딩 ( index.html ) ]**

<img src = "https://github.com/sk7556/JsToGPTPage/assets/109896609/03bd4485-3722-445a-a33b-36d4bc5c3c6f" width = "300" height = "480">

**[ 지도 / 추천 장소 이미지 출력, 화면 이동 ]**

<img src = "https://github.com/sk7556/JsToGPTPage/assets/109896609/742edad1-c97b-4536-be3a-d0883e53c6b9" width = "300" height = "480">

**[ 이미지 전환 ]**

<img src = "https://github.com/sk7556/JsToGPTPage/assets/109896609/53858690-bd01-4419-a797-2f94ced525bb" width = "300" height = "480">


# 3. UI 구조
<img src = "https://github.com/sk7556/JsToGPTPage/assets/109896609/b7ee5662-4bac-4a9e-af81-7acfba752b65" width = "795" height = "275">


# 4. 구현 기능

**[ HTML / CSS ]**

모바일 화면을 목표로 레이아웃, 양식을 적용했습니다

Main 화면의 경우엔 스크롤 방식의 화면 이동방식을 구현했습니다

**[ JavaScript ]**

HTML / CSS를 보조하여 화면을 구성하는 로직을 만들고,

fetch를 이용하여 GPT AI와 API를 활용하였습니다

**[ GPT 프롬프트 엔지니어링 ]**

여행지를 추천받으며 가공하기 쉬운 형태로의 결과물을 도출하기 위해 프롬프트를 구성했습니다

페이지 이동에 지연을 줄이기 위해 데이터 교환의 위치를 분배하려 했습니다

**[ API 리소스 활용 ]**

Google Map API , unsplash API ( 이미지 검색 및 로드 ) 를 활용했으며,

학습이나 개인개발용으로 활용 가능한 API를 사용했습니다 

# 5. 데이터 구조
![dataflow](https://github.com/sk7556/JsToGPTPage/assets/109896609/c0141dc3-0a89-4835-a77d-8b121e52d15a)

<p align = "center">입 / 출력과 페이지별 데이터 흐름</p>


<img src = "https://github.com/sk7556/JsToGPTPage/assets/109896609/1b2a1525-41a1-4080-ac90-7f55ac78d390" width = "300" height = "480">

<p align = "left">작업 파일 트리</p>


# 6. 개발 이슈
**[ 프롬프트 엔지니어링 이슈 ]**

입력한 값에 따라 원하는 정확한 데이터를 출력하지 못하는 경우가 잦아

질문을 제한하는 방법을 연구하는데 시간이 많이 걸렸으며, GPT의 성향에 따라 개발 구조를 변경해야하는 이슈가 있었습니다

조금 더 데이터를 가공하는 노하우가 있었다면 좌표나 설명 등의 데이터화를 잘 해낼 수 있었다는 아쉬움이 있었습니다

입력값과 출력값에 대한 정리가 필요하다 생각되었습니다

**[ 레이아웃 구성 및 반응형 디자인 이슈 ]**

제한된 자리에 레이아웃을 만드는데, 화면 이동 JS를 구성하면서 화면관리를 하지 못하는 이슈가 발생했습니다.

스크롤 이동 시, 화면 밖으로 나가는 UI 들을 처리하지 못했으며, 

해상도가 변경되었을 때 화면이 제대로 출력되지 않는 이슈가 있습니다. 

고정된 값보다는 화면 앵커나 비율에 기반한 레이아웃 구성에 대한 이해가 필요합니다

**[ 프로젝트 시간분배 이슈 ]**

fetch 및 GPT의 프롬프트 엔지니어링에 난항을 겪어

초반 계획에 있었던 History나 index 화면 애니메이션을 추가하지 못한 이슈가 있었습니다

스케쥴을 업무시간보다는 업무 내용에 맞추고, 해당 기간 내 업무 내용이 넘친다 생각하면 

중간에 과감하게 내용은 변경하는 융통성이 필요하다 보였습니다 

프로젝트 진행 내용을 기록했다면 더 도움이 되었을 것 같습니다


# 7. 링크
- 개발툴    : VSCODE
- 개발 언어 : HTML / CSS / JavaScript  
- Git repo  :  https://github.com/sk7556/JsToGPTPage/
- 배포      :  https://sk7556.github.io/JsToGPTPage/































