import './Card.scss'
import { useEffect,useState} from 'react';
import * as axios from 'axios';

export const Card = (props) => {

    const [usersPost, setUsersPost] = useState([]);
    const [nameUsers, setNameUsers] = useState([]); //відсортований масив
    const [sortNameArray, setSortNameArray] = useState([]);//невідсортований масив
    const [userId, setUserId] = useState();
    const [cardChangeClass, setCardChangeClass] = useState('card');
    const [blockInfoChange, setBlockInfoChange] = useState('blockInfo');
    const [blockTitleChange, setBlockTitleChange] = useState('titleHide');
    const [changeSortName, setChangeSortName] = useState(true);//читання стану для переключання сортування
    const [sortName, setSortName] = useState(sortNameArray);//зміна сортування


    let numberPosts = []  //створення нового масиву зі старого для підрахунку кількості постів

    function nameSort(x, y){
        return x.username.localeCompare(y.username);
    } //cортування по імені користувача

    function sortClick(event){
        nameUsers.sort(nameSort)

        if(changeSortName == false){
            setChangeSortName(true)
            setSortName(nameUsers)
            event.target.innerHTML = 'Звичайний вигляд'
        } else if(changeSortName == true){
            setChangeSortName(false)
            setSortName(sortNameArray)
            event.target.innerHTML = 'Сортування за іменем'
        }
    }

    const SearchUser = sortName.filter(filt =>{
        return filt.username.toLowerCase().includes(props.valueSearch.toLowerCase())
    })//Повертає користувача через пошук по імені
    
    useEffect(()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(data=>{
            setUsersPost(data.data);
        })
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(data=>{
                setNameUsers(data.data);
            })
            axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(data=>{
                setSortNameArray(data.data);
            })
      
    },[]) 

        function postChange(event){
            setUserId(event.target.value);
            if(cardChangeClass == 'card' &&  event.target.innerHTML == 'Показати всі пости'){
                setCardChangeClass('cardChange');
                setBlockInfoChange('blockInfoChange')
                setBlockTitleChange('title')
                event.target.innerHTML = 'Cховати пости'
                props.changeClassCards()
            } else if(cardChangeClass == 'cardChange' && event.target.innerHTML == 'Cховати пости'){
                setCardChangeClass('card');
                setBlockInfoChange('blockInfo')
                setBlockTitleChange('titleHide')
                event.target.innerHTML = 'Показати всі пости'
                props.changeClassCards()
            } else if(cardChangeClass == 'cardChange' && event.target.innerHTML == 'Показати всі пости'){
                event.target.innerHTML = 'Cховати пости'
            } else if(cardChangeClass == 'card' && event.target.innerHTML == 'Cховати пости'){
                event.target.innerHTML = 'Показати всі пости' 
            } 
        }//зміна стилей та показ/скриття постів при натисканні на кнопку
      

        return(
        <>
            <button onClick={sortClick} className='btnSort'>Показати користувачів</button>
        <div className='wrapper'>
            {SearchUser.map (function (user) {
                return <div className={cardChangeClass}>
                <div className={blockInfoChange}>
                    <span>{user.username}</span>
                    <span>{user.email}</span>
                    <span>{user.phone}</span>
                    <span>{user.phone}</span>
                </div>
                <button onClick={postChange}  value={user.id}>Показати всі пости</button>
            </div>
                 })}

            <div className={blockTitleChange}>
                <div className='blockTitle'>
                        {usersPost.map (function (post) {
                            if(post.userId == userId){
                            numberPosts.push(post)//Виведення постів всього однієї людини по userId та додавання їх до нового массиву
                                return  <div>
                                            <h5>Title {numberPosts.length}</h5>
                                            <p>{post.title}</p>
                                        </div>     
                            }
                            })}
                </div>
            </div>  
        </div>
        </>
      
    )
}