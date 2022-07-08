import React, { useEffect, useState } from 'react'; 
import ContactsInfo from '../components/ContactsInfo'; 
import Loader from '../components/Loader';
import { generalUsersScore } from '../http/userAPI'; 
 
import './styles/GeneralScorePage.css' 
 
const GeneralScorePage = () => { 
  const res = generalUsersScore().then(users => {
    const sortedUsers = users.sort((a, b) => a.score > b.score ? -1 : 1);
    return sortedUsers.map(function(user) {
      return <tr>
        <td>{user.id}</td> 
        <td>{user.name}</td> 
        <td>{user.score}</td> 
      </tr> 
    });
  });
  const [usersScore, setUsersScore] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    res.then(data => {
      setUsersScore(data)
    }).finally(() => setLoading(false))
  }, [])
  if (loading) {
    return <Loader/>
  }
  return ( 
      <div>
          <div id='GeneralScoreBody'> 
              <table> 
                <tbody> 
                  <tr> 
                    <th>№</th> 
                    <th>Ф.И.О.</th> 
                    <th>Рейтинг</th> 
                  </tr> 
                  {usersScore} 
                </tbody> 
              </table> 
          </div> 
          <ContactsInfo/> 
      </div> 
  ); 
}; 
 
export default GeneralScorePage;