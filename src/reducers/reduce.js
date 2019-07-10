const myconst ={
    maps:[
        {stars : 1,title : 'Marcus Theatres', image :'https://static.metacritic.com/images/products/movies/9/4b4d0009af3539aee7f2f32ac75b5245-250h.jpg',discription :''},
        {stars : 1,title : 'The Greatest Shawmzn', image :'https://s1.thcdn.com/productimg/1600/1600/11640742-1884546273671087.jpg',discription :''},
        {stars : 3,title : 'Atalan', image :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT78l0A0jhIY8sRDDUTMxo2-a5ihkqZGyKVCJn3thExILjoXZV3',discription :''},
        {stars : 1,title : 'Capital Marvel', image :'https://www.myvue.com/-/media/images/film%20and%20events/february%202019/190225/captainmarvel-film-panel.jpg?sc=.99',discription :''},
        {stars : 4,title : 'Assembel 2019', image :'https://i.pinimg.com/736x/d5/b0/2d/d5b02df3f4083c69a02f70b1d05f37d1.jpg',discription :''},
   
    ],
    display : "hide" , //my-form
    title:"",
    image:"",
    discription:"",
    search:"",
    starcolor:"yellow",
    stars:"",
    idsearch:""
}

const reducer = (state=myconst , action) => {
    if(action.type ==='TITLE_CHANGE'){
        let newObj = Object.assign({}, state ,{title: action.data});
        return newObj;   
    }
    if(action.type=='DISCRIPTION_CHANGE'){
        let newObj = Object.assign({}, state ,{discription: action.data});
        return newObj;   
    }
    if(action.type=='IMAGE_CHANGE'){
        let newObj = Object.assign({}, state ,{image: action.data});
        return newObj;   
    }
    if(action.type=='RATING_CHANGE'){
        let newObj = Object.assign({}, state ,{stars: action.data});
        return newObj;   
    }
    if(action.type=='PUSH_NEW'){
      let newObj = 
        Object.assign({}, state ,{maps: state.maps.concat({stars:state.stars ,title : state.title, image:state.image, discription:state.discription }), display: "hide"});
      return newObj;
     }
     if(action.type=='MY_FORM'){
        let newObj = Object.assign({}, state ,{display: 'my-form', title:"",
        image:"",
        discription:""});
        return newObj;   
    }
    if(action.type=='CANCEL'){
        let newObj = Object.assign({}, state ,{display: 'hide', title:"",
        image:"",
        discription:""}, );
        return newObj;   
    }
    if(action.type=='SEARCH_CHANGE'){
        let newObj = Object.assign({}, state ,{search: action.data});
        console.log(state.search);

        return newObj;   
    }
    if(action.type=='RATING_SEARCH'){
        let newObj = Object.assign({}, state ,{idsearch: action.data});
        console.log(state.idsearch);

        return newObj;   
    }
    return state ;
}
export default reducer ;