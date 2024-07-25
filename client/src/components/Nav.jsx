import { Link } from "react-router-dom";
import "./Nav.css";
import React , {useState} from "react";
function Nav() {
	const [colour , setColor] = useState("#808080");
	const [activeButton, setActiveButton] = useState(null);

	function HandleClick(buttonid){
		if(buttonid !== activeButton){
			setColor("#303030")
			setActiveButton(buttonid)
		}
	};
  return (
    
    <div className="wrapper" >
	  <Link to="/Beach" className="p-2">
	  <button className="icon-button" onClick={() => {HandleClick("beach")}}>

	  <svg fill={activeButton === 'beach' ? colour : "#606060"} width="30px" height="30px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" id="chair_x5F_umbrella" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

<g>
<path d="M474.407,170.574c-0.449-1.188-0.912-2.368-1.389-3.541c-0.119-0.292-0.246-0.579-0.366-0.87   c-0.363-0.877-0.725-1.754-1.104-2.622c-0.293-0.674-0.6-1.339-0.902-2.007c-0.216-0.479-0.425-0.961-0.646-1.437   c-0.303-0.654-0.621-1.3-0.934-1.949c-0.232-0.481-0.457-0.968-0.694-1.447c-0.362-0.732-0.738-1.455-1.112-2.181   c-0.198-0.387-0.391-0.778-0.593-1.163c-0.419-0.797-0.852-1.585-1.284-2.373c-0.167-0.307-0.328-0.616-0.498-0.921   c-0.466-0.837-0.946-1.664-1.428-2.49c-0.145-0.249-0.283-0.503-0.43-0.751c-0.581-0.984-1.175-1.96-1.776-2.93   c-0.053-0.084-0.103-0.172-0.155-0.256c-0.614-0.986-1.242-1.962-1.878-2.933c-0.044-0.066-0.086-0.135-0.129-0.202   c-0.562-0.853-1.137-1.695-1.715-2.536c-0.124-0.181-0.243-0.365-0.367-0.544c-0.594-0.856-1.201-1.703-1.813-2.546   c-0.114-0.158-0.224-0.319-0.339-0.477c-0.729-0.996-1.469-1.983-2.221-2.961c0,0,0,0-0.001-0.001   c-0.741-0.964-1.494-1.918-2.258-2.862c-0.012-0.015-0.023-0.03-0.035-0.045c-0.761-0.939-1.532-1.869-2.314-2.79   c-0.017-0.019-0.032-0.038-0.048-0.058c-13.045-15.335-29.131-27.977-47.551-37.216l3.092-6.744   c1.491-3.25,0.063-7.093-3.188-8.582c-3.248-1.49-7.092-0.064-8.582,3.188l-3.123,6.813   c-35.482-14.248-74.438-14.676-110.421-1.066c-38.021,14.383-68.167,42.713-84.882,79.771c-1.471,3.259-0.021,7.093,3.239,8.563   l126.013,56.842l-36.287,79.172H180.994l-27.631-54.71c-1.102-2.182-3.336-3.556-5.778-3.556H108.03   c-2.235,0-4.313,1.153-5.495,3.051c-1.183,1.898-1.301,4.271-0.314,6.278l43.896,89.341c1.088,2.215,3.342,3.619,5.811,3.619h3.988   l-11.457,25.863c-0.888,2.002-0.701,4.317,0.493,6.153c1.194,1.835,3.236,2.942,5.426,2.942h29.729c2.477,0,4.735-1.412,5.82-3.638   l15.264-31.321h64.921l-10.647,23.229c-0.104,0.226-0.159,0.459-0.235,0.688c-43.954,0.947-79.755,14.972-103.513,27.799   c-30.866,16.665-48.293,34.572-49.02,35.327c-2.603,2.7-2.523,6.996,0.176,9.602c2.695,2.605,6.997,2.529,9.605-0.166   c0.167-0.172,16.982-17.381,46.134-33.039c26.713-14.348,69.623-30.324,122.347-24.916   c101.232,10.373,140.068,57.023,140.436,57.476c1.342,1.681,3.318,2.556,5.314,2.556c1.486,0,2.983-0.485,4.236-1.485   c2.933-2.342,3.412-6.618,1.07-9.552c-1.676-2.098-42.266-51.51-149.67-62.516c-4.411-0.452-8.748-0.748-13.024-0.931   l11.032-24.071h43.301l15.264,31.321c1.084,2.226,3.344,3.638,5.82,3.638h29.729c2.19,0,4.232-1.107,5.426-2.942   c1.194-1.836,1.381-4.151,0.493-6.153l-11.457-25.863h2.823c3.575,0,6.474-2.898,6.474-6.475v-31.075   c0-3.575-2.898-6.474-6.474-6.474h-71.222l33.848-73.848l127.85,57.669c0.844,0.382,1.752,0.573,2.661,0.573   c0.775,0,1.552-0.14,2.292-0.419c1.605-0.608,2.904-1.828,3.609-3.394C487.507,249.945,488.792,208.597,474.407,170.574z    M176.061,372.457h-15.734l9.752-22.012h16.709L176.061,372.457z M364.52,372.457h-15.734l-10.727-22.012h16.709L364.52,372.457z    M365.279,337.497h-6.299h-31.278H197.144h-31.278h-9.906l-37.535-76.394h25.178l27.631,54.711   c1.102,2.181,3.336,3.556,5.779,3.556h188.268V337.497z M395.338,245.866l-55.564-25.063l-11.801-5.324l-53.941-24.331   c16.947-39.323,41.465-66.88,72.942-81.962c13.902-6.661,26.294-9.34,34.491-10.417c3.173-0.417,5.737-0.602,7.488-0.673   c1.068,1.371,2.565,3.419,4.281,6.067c4.486,6.925,10.512,18.093,14.613,33.022C417.107,170.879,412.896,207.415,395.338,245.866z"/>

<path d="M80.349,181.725c23.21,0,42.094-18.884,42.094-42.094s-18.884-42.094-42.094-42.094s-42.093,18.884-42.093,42.094   S57.139,181.725,80.349,181.725z M80.349,110.485c16.071,0,29.146,13.074,29.146,29.146s-13.074,29.146-29.146,29.146   s-29.146-13.074-29.146-29.146S64.277,110.485,80.349,110.485z"/>

<path d="M80.424,91.485c3.576,0,6.474-2.897,6.474-6.474V69.474C86.897,65.898,84,63,80.424,63s-6.475,2.898-6.475,6.474v15.538   C73.949,88.588,76.848,91.485,80.424,91.485z"/>

<path d="M80.424,188.596c-3.576,0-6.475,2.897-6.475,6.474v14.243c0,3.575,2.898,6.474,6.475,6.474s6.474-2.898,6.474-6.474   v-14.243C86.897,191.493,84,188.596,80.424,188.596z"/>

<path d="M128.331,140.688c0,3.576,2.898,6.475,6.474,6.475h14.243c3.576,0,6.474-2.898,6.474-6.475   c0-3.575-2.897-6.474-6.474-6.474h-14.243C131.229,134.214,128.331,137.112,128.331,140.688z"/>

<path d="M9.209,147.162h15.538c3.576,0,6.474-2.898,6.474-6.475c0-3.575-2.897-6.474-6.474-6.474H9.209   c-3.575,0-6.474,2.898-6.474,6.474C2.735,144.264,5.634,147.162,9.209,147.162z"/>

<path d="M123.433,174.782c-2.529-2.528-6.627-2.53-9.155-0.001c-2.529,2.527-2.529,6.627-0.002,9.156l10.401,10.403   c1.265,1.265,2.921,1.896,4.579,1.896c1.656,0,3.313-0.632,4.577-1.896c2.528-2.527,2.528-6.627,0.001-9.155L123.433,174.782z"/>

<path d="M35.977,105.639c1.265,1.263,2.921,1.896,4.578,1.896c1.656,0,3.313-0.633,4.578-1.897   c2.527-2.528,2.527-6.628-0.001-9.155L34.728,86.08c-2.528-2.526-6.627-2.527-9.156,0.001c-2.527,2.529-2.527,6.628,0.002,9.156   L35.977,105.639z"/>

<path d="M118.854,107.534c1.656,0,3.314-0.633,4.578-1.897l10.401-10.4c2.528-2.528,2.528-6.627,0-9.155   c-2.526-2.528-6.629-2.528-9.155,0l-10.4,10.401c-2.529,2.527-2.529,6.627,0,9.154C115.54,106.901,117.197,107.534,118.854,107.534   z"/>

<path d="M34.728,194.341l10.404-10.403c2.528-2.528,2.528-6.627,0-9.155c-2.526-2.528-6.629-2.528-9.155,0l-10.403,10.404   c-2.529,2.527-2.529,6.627,0,9.154c1.263,1.265,2.921,1.896,4.577,1.896S33.465,195.605,34.728,194.341z"/>

<path d="M500.504,183.038c-3.535,0.535-5.969,3.833-5.436,7.368c0.23,1.523,0.408,2.568,0.555,3.434   c0.311,1.825,0.452,2.657,0.713,6.09c0.256,3.399,3.094,5.986,6.448,5.986c0.163,0,0.329-0.007,0.494-0.02   c3.564-0.27,6.236-3.377,5.968-6.942c-0.291-3.862-0.484-5.089-0.857-7.285c-0.137-0.806-0.303-1.777-0.517-3.195   C507.339,184.938,504.047,182.501,500.504,183.038z"/>

<path d="M478.446,139.386c2.089,3.797,4.037,7.803,5.788,11.905c2.001,4.687,3.799,9.624,5.346,14.676   c0.854,2.788,3.417,4.581,6.188,4.581c0.628,0,1.266-0.091,1.896-0.284c3.42-1.047,5.343-4.666,4.297-8.085   c-1.681-5.49-3.638-10.863-5.818-15.971c-1.92-4.497-4.057-8.893-6.352-13.063c-6.176-11.227-13.708-21.279-22.389-29.883   c-2.538-2.518-6.637-2.5-9.154,0.04c-2.518,2.539-2.5,6.639,0.04,9.154C466.086,120.186,472.868,129.247,478.446,139.386z"/>

</g>

</svg>
        <p className="para">Beach</p>
		<div className="underline"></div>
		{activeButton === "beach" && <div className="underline1"></div>}
		</button>
      </Link>
	  <Link to="/Windmill" className="p-2">
	  <button className="icon-button"  onClick={() => {HandleClick("windmill")}}>

	  <svg fill={activeButton === "windmill" ? colour : "#606060"} width="30px" height="30px" viewBox="0 0 15 15" version="1.1" id="windmill" xmlns="http://www.w3.org/2000/svg">
  <path d="M6,5L3.5,7.5l1,1L7,6V5.5L7.5,5L8,5.5V6l2.5,2.5l1-1L9,5H8.5L8,4.5L8.5,4H9l2.5-2.5l-1-1L8,3v0.5L7.5,4L7,3.5V3L4.5,0.5&#xA;&#x9;l-1,1L6,4h0.5L7,4.5L6.5,5H6z M11.5,13h-1l-1-4l-2-2l-2,2l-1,4h-1C3.2239,13,3,13.2238,3,13.5C3,13.7761,3.2239,14,3.5,14h8&#xA;&#x9;c0.2761,0,0.5-0.2239,0.5-0.5C12,13.2238,11.7761,13,11.5,13z M8,13H7v-1.5024C7,11.2228,7.2228,11,7.4976,11&#xA;&#x9;C7.7751,11,8,11.2249,8,11.5024V13z"/>
</svg>
        <p className="para">Windmill</p>
		<div className="underline" ></div>
		{activeButton === "windmill" && <div className="underline1"></div>}
		</button>
      </Link>
	  <Link to="/Modern"  className="p-2">
	  <button className="icon-button" onClick={() => {HandleClick("modern")}}>

	  <svg fill={activeButton === "modern" ? colour : "#606060"} width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.372,5.071l-10-4A1,1,0,0,0,11,2V6H2A1,1,0,0,0,1,7V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V6A1,1,0,0,0,22.372,5.071ZM3,8h8V21H3ZM13,21V3.477l8,3.2V8H15v2h6v2H15v2h6v2H15v2h6v3ZM7,12h3v2H7ZM4,12H6v2H4ZM7,9h3v2H7ZM4,9H6v2H4Zm3,6h3v2H7ZM4,15H6v2H4Zm3,3h3v2H7ZM4,18H6v2H4Z"/></svg>
        <p className="para">Modern</p>
		<div className="underline"></div>
		{activeButton === "modern" && <div className="underline1"></div>}
		</button>
      </Link>
	  <Link to="/Outside" className="p-2">
	  <button className="icon-button" onClick={() => {HandleClick("outside")}}>

	  <svg width="30px" height="30px" viewBox="0 0 24 24" fill={activeButton === "outside" ? colour : "#808080"} xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M3.18596 18.1957C3.10451 18.329 3.20043 18.5 3.35661 18.5H20.1935C20.3379 18.5 20.4347 18.3516 20.3766 18.2195L15.1918 6.43601C15.1205 6.27377 14.8889 6.2777 14.8231 6.44228L12.5803 12.0492C12.5538 12.1155 12.5646 12.1909 12.6087 12.2471L14.2863 14.3822C14.6275 14.8165 14.5521 15.4451 14.1178 15.7863C13.6835 16.1275 13.0549 16.0521 12.7137 15.6178L8.41831 10.151C8.33217 10.0414 8.1631 10.0513 8.09039 10.1703L3.18596 18.1957Z" fill={activeButton === "outside" ? colour : "#808080"}/>
  <path d="M14.2863 14.3822L14.6795 14.0733L14.6795 14.0733L14.2863 14.3822ZM14.1178 15.7863L13.8089 15.3932L13.8089 15.3932L14.1178 15.7863ZM12.7137 15.6178L13.1068 15.3089L13.1068 15.3089L12.7137 15.6178ZM12.5803 12.0492L12.1161 11.8635L12.5803 12.0492ZM12.6087 12.2471L12.2156 12.556L12.6087 12.2471ZM8.41831 10.151L8.81147 9.84208L8.41831 10.151ZM8.09039 10.1703L7.66375 9.90954L8.09039 10.1703ZM15.1918 6.43601L15.6495 6.23464L15.1918 6.43601ZM14.8231 6.44228L15.2873 6.62798L14.8231 6.44228ZM3.18596 18.1957L2.75931 17.935L3.18596 18.1957ZM20.3766 18.2195L19.9189 18.4208L20.3766 18.2195ZM20.1935 19H3.35661V18H20.1935V19ZM15.6495 6.23464L20.8342 18.0181L19.9189 18.4208L14.7342 6.63738L15.6495 6.23464ZM12.1161 11.8635L14.3588 6.25659L15.2873 6.62798L13.0445 12.2349L12.1161 11.8635ZM13.0019 11.9382L14.6795 14.0733L13.8932 14.6911L12.2156 12.556L13.0019 11.9382ZM14.6795 14.0733C15.1913 14.7247 15.0781 15.6677 14.4267 16.1795L13.8089 15.3932C14.026 15.2226 14.0638 14.9082 13.8932 14.6911L14.6795 14.0733ZM14.4267 16.1795C13.7753 16.6913 12.8323 16.5781 12.3205 15.9267L13.1068 15.3089C13.2774 15.526 13.5918 15.5638 13.8089 15.3932L14.4267 16.1795ZM12.3205 15.9267L8.02516 10.4599L8.81147 9.84208L13.1068 15.3089L12.3205 15.9267ZM2.75931 17.935L7.66375 9.90954L8.51704 10.431L3.6126 18.4564L2.75931 17.935ZM13.0445 12.2349C13.0843 12.1355 13.0681 12.0224 13.0019 11.9382L12.2156 12.556C12.0612 12.3595 12.0233 12.0956 12.1161 11.8635L13.0445 12.2349ZM8.02516 10.4599C8.15437 10.6244 8.40798 10.6094 8.51704 10.431L7.66375 9.90954C7.91822 9.49313 8.50997 9.45835 8.81147 9.84208L8.02516 10.4599ZM14.7342 6.63738C14.8413 6.88075 15.1886 6.87485 15.2873 6.62798L14.3588 6.25659C14.5893 5.68056 15.3996 5.66679 15.6495 6.23464L14.7342 6.63738ZM3.35661 19C2.80996 19 2.47426 18.4014 2.75931 17.935L3.6126 18.4564C3.73476 18.2565 3.59089 18 3.35661 18V19ZM20.1935 18C19.9769 18 19.8317 18.2225 19.9189 18.4208L20.8342 18.0181C21.0378 18.4807 20.6989 19 20.1935 19V18Z" fill={activeButton === "outside" ? colour : "#808080"}/>
</svg>

        <p className="para">Outside</p>
		<div className="underline"></div>
		{activeButton === "outside" && <div className="underline1"></div>}
		</button>
      </Link>
	  <Link to="/Pool" className="p-2">
	  <button className="icon-button" onClick={() => {HandleClick("pool")}}>

	  <svg fill={activeButton === "pool" ? colour : "#606060"} width="30px" height="30px" viewBox="0 0 15 15" version="1.1" id="swimming" xmlns="http://www.w3.org/2000/svg">
  <path id="path16388" d="M10.1113,2C9.9989,2,9.6758,2.1465,9.6758,2.1465L6.3535,3.8262&#xA;&#x9;C5.9111,4.0024,5.7358,4.7081,6.002,5.0605l0.9707,1.4082L3.002,8.498L5,9.998l2.502-1.5l2.5,1.5l1.002-1.002l-3-4l2.5566-1.5293&#xA;&#x9;c0.5286-0.2662,0.4434-0.7045,0.4434-0.9707C10.9999,2.2861,10.6437,2,10.1113,2z M12.252,5C11.2847,5,10.5,5.7827,10.5,6.75&#xA;&#x9;s0.7847,1.752,1.752,1.752s1.75-0.7847,1.75-1.752S13.2192,5,12.252,5z M2.5,10L0,11.5V13l2.5-1.5L5,13l2.502-1.5l2.5,1.5L12,11.5&#xA;&#x9;l3,1.5v-1.5L12,10l-1.998,1.5l-2.5-1.5L5,11.5L2.5,10z"/>
</svg>
        <p className="para">Pool</p>
		<div className="underline"></div>
		{activeButton === "pool" && <div className="underline1"></div>}
		</button>
      </Link>
	  <Link to="/Island" className="p-2">
	  <button className="icon-button" onClick={() => {HandleClick("island")}}>

	  <svg fill={activeButton === "island" ? colour : "#606060"} height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512" xmlSpace="preserve">
<g>
	<g>
		<path d="M445.467,131.791c13.553-4.244,25.244-8.443,29.095-9.849c7.894-2.878,12.42-11.163,10.58-19.362
			c-11.564-51.543-72.007-74.26-119.816-51.859c-16.458-42.52-65.103-63.662-106.051-42.294
			c-6.793,3.552-10.301,11.266-8.509,18.717c2.489,10.344,5.268,21.245,8.764,31.742c-54.85-9.38-113.41,11.652-141.231,54.943
			c-5.722,8.916-1.804,20.898,8.144,24.666c27.008,10.225,56.049,15.956,87.9,17.273c-25.27,29.552-37.543,67.467-31.16,102.826
			c1.793,9.91,11.921,16.003,21.479,12.965c35.057-11.077,76.696-40.519,103.584-65.385c8.59,30.208,25.51,72.065,47.764,94.476
			c6.566,6.611,17.309,6.586,23.832-0.119c18.161-18.647,29.176-40.41,32.728-64.225c15.884,12.954,32.358,24.617,47.774,33.715
			c8.785,5.188,20.125,1.36,23.968-8.089C500.91,221.172,487.368,166.417,445.467,131.791z"/>
	</g>
</g>
<g>
	<g>
		<path d="M302.613,414.988c-0.34-30.806,2.363-59.964,8.781-90.425l0.006-0.017c1.436-6.852,3.117-13.497,4.834-20.128
			c-9.36-13.439-17.273-28.278-23.509-42.577c-21.545,15.498-49.556,32.653-77.98,41.635c-1.991,0.631-4.044,1.053-6.104,1.429
			c-13.866,35.284-23.588,70.997-30.272,109.715c-75.447,7.76-157.575,32.789-157.575,80.645c0,9.244,7.49,16.735,16.735,16.735
			h401.63c9.244,0,16.735-7.49,16.735-16.735C455.894,448.223,379.333,423.355,302.613,414.988z"/>
	</g>
</g>
</svg>
        <p className="para">Island</p>
		<div className="underline"></div>
		{activeButton === "island" && <div className="underline1"></div>}
		</button>
      </Link>
	  <Link to="/Lake" className="p-2">
	  <button className="icon-button" onClick={() => {HandleClick("lake")}}>

	  <svg fill={activeButton === "lake" ? colour : "#606060"} height="30px" width="30px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 309.906 309.906" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 309.906 309.906">
  <g>
    <g>
      <path d="m152.407,268.573c0-5.523-4.478-10-10-10h-130.732c-5.522,0-10,4.477-10,10 0,5.522 4.478,10 10,10h130.732c5.523,0 10-4.478 10-10z"/>
      <path d="m297.464,289.906h-181.933c-5.522,0-10,4.478-10,10 0,5.523 4.478,10 10,10h181.933c5.523,0 10-4.477 10-10s-4.477-10-10-10z"/>
      <path d="m238.467,278.573c5.522,0 10-4.478 10-10 0-5.523-4.478-10-10-10h-55.003c-5.522,0-10,4.477-10,10 0,5.522 4.478,10 10,10h55.003z"/>
      <path d="m99.123,98.438l23.372,41.048c2.071,3.638 5.825,5.997 10.001,6.286l49.822,3.439c6.98,0.465 12.861-4.795 13.332-11.609 0.475-6.888-4.723-12.856-11.609-13.332l-43.137-2.977-20.056-35.223 18.15,18.483 2.491-11.71c2.142-10.068-4.284-19.966-14.352-22.108l-32.509-6.915c-10.068-2.142-19.966,4.284-22.108,14.352l-14.3,67.223h53.338l-12.435-46.957z"/>
      <circle cx="122.755" cy="27.59" r="27.59"/>
      <path d="m304.091,150.615l-126.388-104.208c-3.762-3.101-9.077-3.462-13.224-0.899-4.146,2.563-6.198,7.481-5.105,12.231l12.233,53.145 13.292,.917c4.051,0.28 7.806,1.515 11.069,3.463l-6.904-29.992 79.042,65.172-62.798,5.397-1.238-5.376c-4.964,7.542-13.599,11.838-22.616,11.217-35.219-2.419-58.007-4.288-58.007-4.288h-81.082c-12.742,0-23.074,10.325-23.083,23.067l-.029,42.724c-0.009,12.747 10.331,23.099 23.083,23.099h117.382c58.567,0 113.193-29.503 145.308-78.479 0.243-0.371 2.242-3.587 2.69-5.028 1.375-4.414-0.058-9.222-3.625-12.162z"/>
    </g>
  </g>
</svg>
        <p className="para">Lake</p>
		<div className="underline"></div>
		{activeButton === "lake" && <div className="underline1"></div>}
		</button>
      </Link>
	  <Link to="/Skiing" className="p-2">
	  <button className="icon-button" onClick={() => {HandleClick("skiing")}}>

	  <svg width="30px" height="30px" viewBox="0 0 24 24" fill={activeButton === "skiing" ? colour : "#606060"} xmlns="http://www.w3.org/2000/svg">
  <path d="M18.544 5.95467C19.9282 5.95467 21.0503 4.84553 21.0503 3.47733C21.0503 2.10914 19.9282 1 18.544 1C17.1598 1 16.0377 2.10914 16.0377 3.47733C16.0377 4.84553 17.1598 5.95467 18.544 5.95467Z" fill={activeButton === "skiing" ? colour : "#808080"}/>
  <path d="M2.41932 12.9809C1.91577 12.7534 1.32095 12.9724 1.09075 13.4701C0.860558 13.9679 1.08216 14.5558 1.58571 14.7834L19.1153 22.7043C19.8545 23.0642 20.6163 23.0856 21.2817 22.8226C21.9292 22.5665 22.4154 22.07 22.6989 21.5096C22.9824 20.9491 23.0925 20.2668 22.9112 19.6011C22.7235 18.9118 22.2432 18.3185 21.4987 17.9505C21.0034 17.7057 20.4012 17.9041 20.1536 18.3936C19.906 18.8831 20.1068 19.4784 20.602 19.7231C20.9671 19.9036 21.0911 20.2564 20.9055 20.6232C20.7198 20.9903 20.3603 21.1039 19.9949 20.9233L19.9792 20.9155L11.9595 17.2917L15.1066 15.4253C15.6084 15.1277 15.7467 14.4703 15.4066 13.9996L13.5314 11.4048L14.1209 10.8222L16.8478 12.1698C17.0956 12.3198 17.3687 12.3957 17.659 12.3957H20.0478C20.6015 12.3957 21.0503 11.9521 21.0503 11.4048C21.0503 10.8575 20.6015 10.4139 20.0478 10.4139H18.892C18.402 10.4139 17.9837 10.0637 17.9031 9.58584L17.7251 8.52962C17.5428 7.44893 16.7905 6.82244 15.9981 6.16976C15.1778 5.49403 13.9655 5.57241 13.2412 6.34802L12.076 7.59573L6.96217 5.06835C6.46695 4.8236 5.86477 5.02201 5.61716 5.51151C5.36955 6.00101 5.57028 6.59623 6.0655 6.84098L10.6602 9.1118L10.1117 9.69913C9.27561 10.5945 9.44716 12.0165 10.4728 12.6924L12.3462 13.9269C12.6584 14.1326 12.6396 14.5921 12.3116 14.7722L9.63563 16.2417L2.41932 12.9809Z" fill={activeButton === "skiing" ? colour : "#808080"}/>
</svg>

        <p className="para">Skiing</p>
		<div className="underline"></div>
		{activeButton === "skiing" && <div className="underline1"></div>}
		</button>
      </Link>
	  <Link to="/Castles" className="p-2">
	  <button className="icon-button" onClick={() => {HandleClick("castles")}}>

	  <svg fill={activeButton === "castles" ? colour : "#606060"} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 width="30px" height="30px" viewBox="0 0 576.3 576.3" xmlSpace="preserve"
	>
<g>
	<g id="Layer_1_5_">
		<path d="M523.926,335.325h-10.2c-6.375,0-10.2,5.1-10.2,10.199v15.301h-24.225v-15.301c0-6.375-5.1-10.199-10.2-10.199h-10.2
			c-6.375,0-10.199,5.1-10.199,10.199v15.301h-26.775v-15.301c0-6.375-5.1-10.199-10.2-10.199h-21.675v-73.95h24.225
			c5.101,0,10.2-2.55,11.476-7.65c2.55-5.1,1.274-10.2-2.55-14.025l-122.4-119.85c-1.275-1.275-3.825-2.55-6.375-3.825V68.85h85.425
			c7.65,0,12.75-6.375,12.75-12.75V20.4c0-7.65-6.375-12.75-12.75-12.75h-85.425V5.1c0-2.55-2.55-5.1-5.1-5.1h-3.825
			c-2.55,0-5.1,2.55-5.1,5.1v110.925c-2.55,1.275-3.825,2.55-5.1,3.825L155.451,239.7c-3.825,3.825-5.1,8.925-2.55,14.025
			c2.55,5.1,6.375,7.65,11.475,7.65h24.225v73.95h-20.4c-6.375,0-10.2,5.1-10.2,10.199v15.301h-26.775v-15.301
			c0-6.375-5.1-10.199-10.2-10.199h-11.475c-6.375,0-10.2,5.1-10.2,10.199v15.301h-25.5v-15.301c0-6.375-5.1-10.199-10.2-10.199
			h-10.2c-6.375,0-10.2,5.1-10.2,10.199v73.95c0,6.375,5.1,10.2,10.2,10.2h24.225V566.1c0,6.375,5.1,10.2,10.2,10.2h131.325V457.725
			c0-25.5,20.4-45.899,45.9-45.899h47.175c25.5,0,45.9,20.399,45.9,45.899V576.3h130.05c6.375,0,10.2-5.1,10.2-10.2V429.675h24.225
			c6.375,0,10.2-5.1,10.2-10.2v-73.95C534.126,339.149,529.025,335.325,523.926,335.325z"/>
	</g>
</g>
</svg>
        <p className="para">Castles</p>
		<div className="underline"></div>
		{activeButton === "castles" && <div className="underline1"></div>}
		</button>
      </Link>
	  <Link to="/Caves" className="p-2">
	  <button className="icon-button" onClick={() => {HandleClick("caves")}}>

	  <svg width="30px" height="30px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <path fill={activeButton === "caves" ? colour : "#606060"} d="M346.951 24.582L299.193 72.34l-101.136-7.024-40.97 80.737 68.688 25.35 37.153-19.936 8.511 15.861-44.293 23.768-79.7-29.416-70.19 55.341 35.117 58.995-.375.2 13.014 21.585 29.134 2.361 55.06-35.123 9.679 15.176-60.16 38.377-44.364-3.596-18.23-30.234-56.8 30.586 33.712 61.804-33.713 40.735L18 444.177V494h170.62l-5.6-45.592a260.658 260.658 0 0 1-5.147-4.512c-4.186-3.761-5.89-5.444-8.027-7.484l-73.13 21.797-21.339-20.484 12.467-12.985 13.777 13.225 73.068-21.78 3.784 3.667s4.24 4.09 9.216 8.636l37.797-37.248 8.133 79.54 6.3-93.444 10.364 28.387 6.281-45.112 3.14-3.091-.29-.233 22.486-27.974.465-.907.188.096 11.453-14.248 14.03 11.277-9.122 11.348 67.803 34.715 27.008-9.489 22.478 17.71 22.924-12.036 8.367 15.938-33.262 17.46-23.875-18.81-24.964 8.772-9.584-4.907 39.04 87.842L383.923 494H494v-28.512L462.713 478.2l-6.776-16.678L494 446.06V211.176l-23.438-26.463-21.654-67.371-33.547 32.666-107.77-13.873-28.019-29.096 12.967-12.486 23.629 24.539 92.867 11.953 31.442-30.615-52.79-61.801zm27.53 177.74l34.177 41.428 28.863-6.56-4.136-13.59 17.22-5.243 9.77 32.098-58.543 13.307-31.377-38.033-33.086 19.853-9.262-15.436z"/>
</svg>

        <p className="para">Caves</p>
		<div className="underline"></div>
		{activeButton === "caves" && <div className="underline1"></div>}
		</button>
      </Link>
	  <Link to="/Camping" className="p-2">
	  <button className="icon-button" onClick={() => {HandleClick("camping")}}>

	  <svg width="30px" height="30px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <path fill={activeButton === "camping" ? colour : "#606060"} d="M361.155 91.245l-18 .193.42 38.98c-45.773 13.285-108.533 19.738-166.474 23.573 35.097 96.284 99.357 173.77 157.845 257.13 20.718-19.655 51.11-31.983 83.46-36.01-20.8-18.109-36.634-27.966-58.833-70.438 31.27 37.085 52.579 48.467 77.623 62.006 3.263-13.094 8.938-24.638 18.721-32.674 8.667-7.12 20.026-10.654 33.53-10.344-46.874-59.763-101.67-117.054-127.83-189.435l-.462-42.98zM163.25 102.92l-17.998.244s.25 18.34.56 36.97c.156 9.316.325 18.703.489 25.929.06 2.636.117 4.58.174 6.542-34.378 83.733-69.154 160.993-123.92 233.442 33.635-1.387 66.326-1.203 98.552-.041 22.263-62.617 23.346-134.855 35.627-202.006 11.417 68.562 10.566 139.445 33.483 205.83 42.962 3.082 85.69 7.198 129.35 10.926-55.67-79.151-118.213-155.037-155.118-249.365-.05-1.782-.1-3.396-.152-5.737-.162-7.156-.333-16.523-.488-25.82-.31-18.594-.559-36.914-.559-36.914z"/>
</svg>

        <p className="para">camping</p>
		<div className="underline"></div>
		{activeButton === "camping" && <div className="underline1"></div>}
		</button>
      </Link>
	  <Link to="/Arctic" className="p-2">
	  <button className="icon-button" onClick={() => {HandleClick("Arctic")}}>

	  <svg fill={activeButton === "Arctic" ? colour : "#606060"} height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512" xmlSpace="preserve">
<g>
	<g>
		<g>
			<path d="M333.2,277.59h177.881c0.529-6.311,0.827-12.684,0.887-19.115H0.032c0.062,6.431,0.358,12.805,0.888,19.115h70.895
				c8.516,0,15.422,6.904,15.422,15.422c0,8.517-6.906,15.422-15.422,15.422H5.409C29.669,424.528,132.808,512,256.001,512
				s226.332-87.472,250.592-203.566H333.2c-8.516,0-15.422-6.904-15.422-15.422C317.779,284.495,324.683,277.59,333.2,277.59z
				 M285.769,414.843H111.205c-0.009,0-0.017,0.002-0.026,0.002c-0.014,0-0.026-0.002-0.04-0.002H97.668
				c-8.516,0-15.422-6.904-15.422-15.422S89.152,384,97.668,384h5.64l38.749-53.654c2.412-3.34,6.062-5.576,10.134-6.209
				c4.068-0.634,8.227,0.39,11.54,2.842l26.513,19.621l35.976-12.621c6.474-2.273,13.67,0.008,17.656,5.59L275.597,384h10.171
				c8.516,0,15.422,6.904,15.422,15.422S294.285,414.843,285.769,414.843z M333.2,384h27.757c8.516,0,15.422,6.904,15.422,15.422
				s-6.906,15.422-15.422,15.422H333.2c-8.516,0-15.422-6.904-15.422-15.422S324.683,384,333.2,384z"/>
			<path d="M112.707,177.167l59.946-53.072c5.231-4.628,12.917-5.168,18.739-1.311l63.23,41.887l69.041-70.112
				c2.884-2.929,6.818-4.585,10.929-4.6c4.076-0.045,8.058,1.61,10.963,4.517l96.415,96.415l67.08,26.201
				C490.253,94.331,383.936,0,256.001,0C124.429,0,15.742,99.775,1.58,227.632h25.993L112.707,177.167z"/>
			<path d="M422.444,214.984l-87.708-87.709l-67.052,68.091c-5.174,5.257-13.355,6.112-19.504,2.036l-63.949-42.362l-52.176,46.194
				c-0.731,0.646-1.521,1.221-2.36,1.72l-42.663,25.287h365.784l-25.079-9.796C425.753,217.671,423.952,216.491,422.444,214.984z"/>
		</g>
	</g>
</g>
</svg>
        <p className="para">Arctic</p>
		<div className="underline"></div>
		{activeButton === "Arctic" && <div className="underline1"></div>}
		</button>
      </Link>
	  <Link to="/Desert" className="p-2">
	  <button className="icon-button" onClick={() => {HandleClick("desert")}} >

	  <svg fill={activeButton === "desert" ? colour : "#606060"} width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18,2a4,4,0,1,0,4,4A4,4,0,0,0,18,2Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,8ZM15,20H13V18a1,1,0,0,0-2,0v2H9V16.62l3.45-1.73A1,1,0,0,0,13,14V10a1,1,0,0,0-2,0v3.38l-2,1V8A1,1,0,0,0,7,8v8.38l-2-1V13a1,1,0,0,0-2,0v3a1,1,0,0,0,.55.89L7,18.62V20H3a1,1,0,0,0,0,2H15a1,1,0,0,0,0-2Z"/></svg>
        <p className="para">Desert</p>
		<div className="underline"></div>
		{activeButton === "desert" && <div className="underline1"></div>}
		</button>
      </Link>
	  <Link to="/Barns" className="p-2">
	  <button className="icon-button" onClick={() => {HandleClick("barns")}}>

	  <svg fill={activeButton === "barns" ? colour : "#606060"} height="30px" width="30px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 32 32" xmlSpace="preserve">
<path d="M31.9,16.6l-3-8c-0.1-0.2-0.2-0.4-0.4-0.5l-12-7c-0.3-0.2-0.7-0.2-1,0l-12,7C3.3,8.3,3.1,8.4,3.1,8.6l-3,8
	C-0.1,17,0,17.3,0.2,17.6C0.4,17.8,0.7,18,1,18h3v12c0,0.6,0.4,1,1,1h6c0.3,0,0.5-0.1,0.7-0.3l4.3-4.3l4.3,4.3
	c0.2,0.2,0.5,0.3,0.7,0.3h6c0.6,0,1-0.4,1-1V18h3c0.3,0,0.6-0.2,0.8-0.4C32,17.3,32.1,17,31.9,16.6z M10.1,30.4
	c0,0.1,0.1,0.2,0.2,0.3s0.2,0.2,0.3,0.2C10.4,30.8,10.2,30.6,10.1,30.4z M10.3,29.3C10.1,29.5,10,29.7,10,30V20
	c0,0.3,0.1,0.5,0.3,0.7l4.3,4.3L10.3,29.3z M21,19c-0.3,0-0.5,0.1-0.7,0.3L16,23.6l-4.3-4.3C11.5,19.1,11.3,19,11,19H21z M12,16v-5
	c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1v5c0,0.6-0.4,1-1,1h-6C12.4,17,12,16.6,12,16z M10.1,19.6c0.1-0.2,0.3-0.4,0.5-0.5
	c-0.1,0-0.2,0.1-0.3,0.2S10.1,19.5,10.1,19.6z M21.4,30.9c0.1,0,0.2-0.1,0.3-0.2s0.2-0.2,0.2-0.3C21.8,30.6,21.6,30.8,21.4,30.9z
	 M22,30c0-0.3-0.1-0.5-0.3-0.7L17.4,25l4.3-4.3c0.2-0.2,0.3-0.5,0.3-0.7V30z M21.4,19.1c0.2,0.1,0.4,0.3,0.5,0.5
	c0-0.1-0.1-0.2-0.2-0.3S21.5,19.1,21.4,19.1z M27.7,16l-1.8-5.3c-0.1-0.2-0.2-0.4-0.5-0.6l-9-5c-0.3-0.2-0.7-0.2-1,0l-9,5
	c-0.2,0.1-0.4,0.3-0.5,0.6L4.3,16H2.4l2.4-6.3L16,3.2l11.2,6.5l2.4,6.3H27.7z"/>
</svg>
        <p className="para">Barns</p>
		<div className="underline"></div>
		{activeButton === "barns" && <div className="underline1"></div>}
		</button>
      </Link>
	  <Link to="/Luxurious" className="p-2">
	  <button className="icon-button" onClick={() => {HandleClick("Luxurious")}}>

	  <svg width="30px" height="30px" viewBox="0 0 24 24" fill={activeButton === "Luxurious" ? colour : "#606060"} xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M19 8.5L17 5.5H14.5L15.5 8.5L12 18.5L19 8.5Z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.37596 8.08397C4.1462 8.42862 4.23933 8.89427 4.58397 9.12404C4.92862 9.3538 5.39427 9.26067 5.62404 8.91603L4.37596 8.08397ZM7 5.5V4.75C6.74924 4.75 6.51506 4.87533 6.37596 5.08397L7 5.5ZM9.5 6.25C9.91421 6.25 10.25 5.91421 10.25 5.5C10.25 5.08579 9.91421 4.75 9.5 4.75V6.25ZM5.61442 8.0699C5.37689 7.73057 4.90924 7.64804 4.5699 7.88558C4.23057 8.12311 4.14804 8.59076 4.38558 8.9301L5.61442 8.0699ZM12 18.5L11.3856 18.9301C11.6004 19.237 12.0088 19.3383 12.3421 19.1674C12.6755 18.9965 12.8317 18.6058 12.7079 18.2522L12 18.5ZM9.20789 8.25224C9.07106 7.86128 8.6432 7.65527 8.25224 7.79211C7.86128 7.92894 7.65527 8.3568 7.79211 8.74776L9.20789 8.25224ZM5 7.75C4.58579 7.75 4.25 8.08579 4.25 8.5C4.25 8.91421 4.58579 9.25 5 9.25V7.75ZM8.5 9.25C8.91421 9.25 9.25 8.91421 9.25 8.5C9.25 8.08579 8.91421 7.75 8.5 7.75V9.25ZM10.2115 5.73717C10.3425 5.34421 10.1301 4.91947 9.73717 4.78849C9.34421 4.6575 8.91947 4.86987 8.78849 5.26283L10.2115 5.73717ZM7.78849 8.26283C7.6575 8.65579 7.86987 9.08053 8.26283 9.21151C8.65579 9.3425 9.08053 9.13013 9.21151 8.73717L7.78849 8.26283ZM9.5 4.75C9.08579 4.75 8.75 5.08579 8.75 5.5C8.75 5.91421 9.08579 6.25 9.5 6.25V4.75ZM14.5 6.25C14.9142 6.25 15.25 5.91421 15.25 5.5C15.25 5.08579 14.9142 4.75 14.5 4.75V6.25ZM8.5 7.75C8.08579 7.75 7.75 8.08579 7.75 8.5C7.75 8.91421 8.08579 9.25 8.5 9.25V7.75ZM19 9.25C19.4142 9.25 19.75 8.91421 19.75 8.5C19.75 8.08579 19.4142 7.75 19 7.75V9.25ZM5.62404 8.91603L7.62404 5.91603L6.37596 5.08397L4.37596 8.08397L5.62404 8.91603ZM7 6.25H9.5V4.75H7V6.25ZM4.38558 8.9301L11.3856 18.9301L12.6144 18.0699L5.61442 8.0699L4.38558 8.9301ZM12.7079 18.2522L9.20789 8.25224L7.79211 8.74776L11.2921 18.7478L12.7079 18.2522ZM5 9.25H8.5V7.75H5V9.25ZM8.78849 5.26283L7.78849 8.26283L9.21151 8.73717L10.2115 5.73717L8.78849 5.26283ZM9.5 6.25H14.5V4.75H9.5V6.25ZM8.5 9.25H19V7.75H8.5V9.25Z" fill="#808080"/>
</svg>
        <p className="para">Luxurious</p>
		<div className="underline"></div>
		{activeButton === "Luxurious" && <div className="underline1"></div>}
		</button>
      </Link>
    </div>
  );
}
export default Nav;