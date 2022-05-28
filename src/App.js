import { useState, useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';
import './App.css';
import Webcam from './components/Webcam';

function App() {
	return (
		<>
			<Webcam />
		</>
	);
}

export default App;
