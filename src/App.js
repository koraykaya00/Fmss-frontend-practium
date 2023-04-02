import React, { useState, useEffect } from 'react';
import getData from './GetData';

function App() {
  const [userData, setUserData] = useState(null);
  const userId = 1;

  useEffect(() => {
    async function fetchData() {
      const result = await getData(userId);
      setUserData(result);
    }
    fetchData();
  }, [userId]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  console.log(userData);

  return (
    <div>
      <h1>{userData.name}</h1>
      <p>{userData.email}</p>
       {/* diğer kullanıcı verileri ve postları burada render edilebilir  */}
    </div>
  );
}

export default App;
