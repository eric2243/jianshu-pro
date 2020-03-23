import styled from "styled-components";

export const HomeWrapper = styled.div`
	width: 960px;
	overflow: hidden;
	margin: 0 auto;
`;
export const HomeLeft = styled.div`
	margin-left: 80px;
	padding-top: 30px;
	width: 625px;
	float: left;
	.banner-img {
		width: 625px;
		height: 270px;
	}
`;
export const TopicWrapper = styled.div`
	padding: 20px 0 10px 0;
	height: 32px;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	background: #f7f7f7;
	margin-left: 18px;
	font-size: 14px;
	padding-right: 10px; 
	margin-bottom: 18px; 
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		width: 32px;
		height: 32px;
		display: block;
		float: left;
		margin-right: 10px;
	}
`;
export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	float: left;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
		margin: 20px 0 0 20px;
	}
`;
export const ListInfo = styled.div`
	width: 450px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333; 
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`;
export const HomeRight = styled.div`
	width: 280px;
	float: right;
`;
export const RecommentWrapper = styled.div`
	margin: 30px 0 30px 70px;
	width: 280px;
`;
export const RecommentItem = styled.div`
	width: 280px; 
	height: 50px;
	background-size: contain;
	background: url( ${ ( props ) => props.imgURL } );
`;
export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	background: #a5a5a5;
	text-align: center;
	border-radius: 20px;
	color: #fff;
	margin: 30px 0;
	cursor: pointer;
	float: left;
`;
export const BackTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border-radius: 50%;
	border: 1px solid #ccc;
	cursor: pointer;
	font-size: 14px;
`;