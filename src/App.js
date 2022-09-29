import { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [tapped, setTapped] = useState(false);
	const [muted, setMuted] = useState(true);
	const [media, setMedia] = useState({
		video: 'https://asset.xapads.com/react-xpd-ads/assets/aquaguard/aquaguard-ayur-video.mp4',
		eurekaLogo:
			'https://asset.xapads.com/react-xpd-ads/assets/aquaguard/aquaguard-eureka-logo.png',
		productLogo:
			'https://asset.xapads.com/react-xpd-ads/assets/aquaguard/aquaguard-product-logo.png',
		leftGlove:
			'https://asset.xapads.com/react-xpd-ads/assets/common/left-pointing-glove-emoji.png',
		rightArrowTriangle:
			'https://asset.xapads.com/react-xpd-ads/assets/common/triangle-right-arrow-icon.png',
		initialImg:
			'https://asset.xapads.com/react-xpd-ads/assets/aquaguard/aquaguard-empty.png',
		finalImg:
			'https://asset.xapads.com/react-xpd-ads/assets/aquaguard/aquaguard-filled.png',
		gif: 'https://asset.xapads.com/react-xpd-ads/assets/aquaguard/ag-animation.gif',
		mute: 'https://asset.xapads.com/react-xpd-ads/assets/common/volume-mute-icon.png',
		unmute: 'https://asset.xapads.com/react-xpd-ads/assets/common/volume-icon.png',
	});

	const handleImageHover = () => {
		let anim = document.getElementById('ag-anim');
		if (anim.src !== media.gif) {
			anim.src = media.gif;
			const cta = document.getElementById('ag-cta');
			cta.innerHTML = '';
			cta.style.width = '20%';
			cta.style.fontSize = '50%';
			cta.style.opacity = '0';
			setTapped(true);
			const leftGlove = document.getElementById('left-pointer');
			leftGlove.style.display = 'none';

			setTimeout(() => {
				document.getElementById('ag-tap-to-fill').style.animation =
					'none';
				cta.innerHTML =
					'A blend of 7 indigenous herbs and spices in your water.';
				cta.style.left = '57%';
				cta.style.opacity = '1';
			}, 1000);
		}
	};

	return (
		<div className='ag-ayur'>
			<img
				id='ag-mute'
				onClick={() => setMuted(!muted)}
				src={muted ? media.mute : media.unmute}
				alt=''
			/>
			<video playsInline autoPlay muted={muted}>
				<source src={media.video} type='video/mp4' />
			</video>
			<div>
				<p id='ag-slogan'>
					<img src={media.productLogo} alt='' />
				</p>
				<img
					onClick={handleImageHover}
					src={media.initialImg}
					alt=''
					id='ag-anim'
				/>
				<div id='ag-tap-to-fill'>
					<img id='left-pointer' src={media.leftGlove} alt='' />
					<p id='ag-cta'>Tap to fill</p>
				</div>

				<img id='ag-logo' src={media.eurekaLogo} alt='' />
			</div>
			{tapped && (
				<>
					<img
						className='bubble img1'
						src='https://asset.xapads.com/react-xpd-ads/assets/lg-puricare/22323.png'
						alt=''
					/>
					<img
						className='bubble img2'
						src='https://asset.xapads.com/react-xpd-ads/assets/lg-puricare/22323e.png'
						alt=''
					/>
					<img
						className='bubble img3'
						src='https://asset.xapads.com/react-xpd-ads/assets/lg-puricare/22323.png'
						alt=''
					/>
					<img
						className='bubble img4'
						src='https://asset.xapads.com/react-xpd-ads/assets/lg-puricare/22323e.png'
						alt=''
					/>
					<img
						className='bubble img5'
						src='https://asset.xapads.com/react-xpd-ads/assets/lg-puricare/22323.png'
						alt=''
					/>
					<img
						className='bubble img6'
						src='https://asset.xapads.com/react-xpd-ads/assets/lg-puricare/22323e.png'
						alt=''
					/>
					<img
						className='bubble img7'
						src='https://asset.xapads.com/react-xpd-ads/assets/lg-puricare/22323e.png'
						alt=''
					/>
					<img
						className='bubble img8'
						src='https://asset.xapads.com/react-xpd-ads/assets/lg-puricare/22323.png'
						alt=''
					/>
					<img
						className='bubble img9'
						src='https://asset.xapads.com/react-xpd-ads/assets/lg-puricare/22323e.png'
						alt=''
					/>
					<img
						className='bubble img10'
						src='https://asset.xapads.com/react-xpd-ads/assets/lg-puricare/22323.png'
						alt=''
					/>
				</>
			)}
		</div>
	);
}

export default App;
