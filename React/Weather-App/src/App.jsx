import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Component/main'
import {Nav,Nav2} from './Component/main'
import Login from './Component/login'
import Signup from './Component/signup'
function App() {
return (
<div>
<Nav/>
<Nav2/>
<Signup/>
</div>
);
}

export default App
