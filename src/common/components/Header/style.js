import styled from "styled-components";
import logoPic from "../../../statics/nav-logo-4c7bbafe27adc892f3046e6978459bac.png";


export const HeaderWrapper = styled.div`
	height: 50px;
	border-bottom: 1px solid #f0f0f0;
	position: relative;
`;
export const Logo = styled.div`
	height: 50px;
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100px;
	background:  url( ${ logoPic } );
	background-size: contain;
`;
export const Nav = styled.div`
	width: 960px;
	height: 100%;
	margin: 0 auto;
	padding-right: 70px;
`;
export const NavItem = styled.div`
	line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	&.iconfont {
		display: none;
	}
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
		cursor: pointer;
	}
	&.active {
		color: #ea6f5a;
	}
	.icon {
		display: none;
	}
	@media(max-width: 960px) {
		&.left {
			display: none;
		}
		&.iconfont {
			float: left;
			display: block;
			margin-left: 100px;
		}
		&.down {
			margin-left: 30px;
		}
		&.right {
			float: right;
			position: absolute;
			top: 0;
			right: 250px;
			.iconfont {
				position: absolute;
				top: 0;
				right: 80px;
			}
		}
	}
`;
export const SearchWrapper = styled.div`
	float: left;
	position: relative;
	.zoom {
		position: absolute;
		line-height: 30px;
		right: 5px;
		bottom: 5px;
		text-align: center;
		width: 30px;
		border-radius: 15px;
		&.focused {
			background: #777;
			color: #fff;
		}
	}
`;
export const NavSearch = styled.input.attrs( {
	placeholder: "搜索"
})`
	width: 160px;
	height: 38px;
	margin-top: 9px;
	border: none;
	outline: none;
	border-radius: 19px;
	padding: 0 20px;
	background: #eee;
	font-size: 14px;
	margin-left: 20px;
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 200px;
	}
	&.slide-enter {
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 200px;
	}
	&.slide-exit {
		transition: all .2s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}
	@media(max-width: 960px) {
		width: 80px;
		margin-left: 50px;
		float: left;
		&.focused {
			width: 100px;
		}
		&.slide-enter {
			transition: all .2s ease-out;
		}
		&.slide-enter-active {
			width: 100px;
		}
		&.slide-exit {
			transition: all .2s ease-out;
		}
		&.slide-exit-active {
			width: 80px;
		}
	}
`;
export const SearchInfo = styled.div`
	position: absolute;
	left: 0;
	top: 56px;
	z-index: 1;
	width: 240px;
	padding: 0 20px;
	height: auto;
	background: rgba(255, 255, 255, .8);
	box-shadow: 0 0 8px rgba( 0, 0, 0, .2 );
`;
export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;
export const SearchInfoSwitch = styled.span`
	float: right;
	font-size: 13px;
	cursor: pointer;
	.spin {
		display: block;
		float: left;
		font-size: 12px;
		margin-right: 2px;
		transition: all .2s ease-in;
		transform-origin: center center;
	}
`;
export const SearchInfoList = styled.div`
	overflow: hidden;
`;
export const SearchInfoItem = styled.a`
	display: block;
	line-height: 20px;
	padding: 0 5px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #333; 
	border-radius: 2px; 
	float: left;
	margin-right: 10px;
	margin-bottom: 10px; 
`;
export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`;
export const Button = styled.div`
	float: right;
	margin-top: 9px;
	margin-right: 20px;
	line-height: 38px;
	border-radius: 19px;
	padding: 0 20px;
	border: 1px solid #ec6149;
	font-size: 14px;
	&.reg {
		color: #ec6149;
	}
	&.writting {
		color: #fff;
		background: #ec6149;
	}
`;