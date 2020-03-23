import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, SearchInfo, SearchInfoTitle, SearchInfoItem, SearchInfoSwitch,
		 SearchInfoList, Addition, Button } from  "./style";
import { actionCreators }  from "./store";
import { actionCreators as loginActionCreators } from "../../../pages/login/store";

class Header extends Component  {

	getListArea() {
		const { focused, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage, list, page, totalPage } = this.props;
		const newList = list.toJS();
		const pageList = [];

		if(newList.length) {
			for(let i = (page - 1) * 10; i < page * 10; i ++) {
				pageList.push(
					<SearchInfoItem key={newList[i]} className="clearfix">{newList[i]}</SearchInfoItem>
					)
			}
		}
		if( focused || mouseIn ) {
			return ( 
				<SearchInfo 
					onMouseEnter = { handleMouseEnter }
					onMouseLeave = { handleMouseLeave }
					>
					<SearchInfoTitle>热门搜索
						<SearchInfoSwitch
							className="clearfix"
							onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
						>
							<i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin clearfix">&#xe851;</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{pageList}
					</SearchInfoList>
				</SearchInfo>
			)
		}else {
			return null;
		}
	}
	render() {
		const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
		return (
			<Fragment>
				<HeaderWrapper>
					<Link to = "/">
						<Logo />
					</Link>
					<Nav>
						<NavItem className = "left active clearfix">首页</NavItem>
						<NavItem className = "iconfont active clearfix">&#xe620;</NavItem>
						<NavItem className = "left clearfix">下载APP</NavItem>
						<NavItem className="iconfont clearfix down">&#xe683;</NavItem>
						{ 
							login ? 
							<NavItem onClick={logout} className = "right clearfix">退出</NavItem> : 
							<Link to = "/login"><NavItem className = "right clearfix">登录</NavItem></Link>
						}
						<NavItem className='right clearfix'>
							<i className="iconfont">&#xe636;</i>
						</NavItem>
						<SearchWrapper className="clearfix">
							<CSSTransition 
								in = { focused }
								timeout = { 200 }
								classNames = "slide"
							>
								<NavSearch 
								className = { focused ? "focused clearfix" : "clearfix" } 
								onFocus = { () => handleInputFocus( list ) } 
								onBlur = { handleInputBlur }></NavSearch>
							</CSSTransition>
							<i className = { focused ? "iconfont focused zoom" : "iconfont zoom" }>&#xe637;</i>						
							{ this.getListArea() }
						</SearchWrapper>
					</Nav>
					<Addition>
						<Link to='/write'>
							<Button className='writting clearfix'>
								<i className="iconfont">&#xe615;</i>
								写文章
							</Button>
						</Link>
						<Button className='reg clearfix'>注册</Button>
					</Addition>
				</HeaderWrapper>
			</Fragment>
		)
	}
}

const mapStateToProps = ( state ) => {
	return {
		focused: state.getIn( [ "header", "focused" ] ),
		mouseIn: state.getIn( [ "header", "mouseIn" ] ),
		page: state.getIn( [ "header", "page" ] ),
		totalPage: state.getIn( [ "header", "totalPage" ] ),
		list: state.getIn( [ "header", "list" ] ),
		login: state.getIn( [ "login", "login" ] ) 	
	}
}
const mapDispatchToProps = ( dispatch ) => {
	return {
		handleInputFocus( list ) {
			( list.size === 0 ) && dispatch( actionCreators.getList() );
			dispatch( actionCreators.searchFocus() );
		},
		handleInputBlur() {
			dispatch( actionCreators.searchBlur() );				
		},
		handleMouseEnter() {
			dispatch( actionCreators.mouseEnter() );
		},
		handleMouseLeave() {
			dispatch( actionCreators.mouseLeave() );
		},
		handleChangePage(page, totalPage, spin) {
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			}else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1));
			}else {
				dispatch(actionCreators.changePage(1));
			}
		},
		logout() {
			dispatch(loginActionCreators.logout())
		}
	}
}

export default connect( mapStateToProps, mapDispatchToProps )( Header );