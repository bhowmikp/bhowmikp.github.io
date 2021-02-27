import AppLayout from '@Components/AppLayout';
import { useState } from 'react';

const Home = () => {

  const [value, setValue] = useState(0);

  return (
    <AppLayout title="Homepage">

      <div className="h-20 flex items-center justify-center">
        <button className={`px-10 py-2 bg-red-500 text-white rounded-md ${value === 0 ? 'animate-bounce' : ''}`} onClick={() => { setValue(value + 1) }}>
          Click Me
      </button>
      </div>
      <p>{value}</p>
    </AppLayout>
  )
}

export default Home;