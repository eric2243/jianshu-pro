import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { actionCreators } from "./store";

import Topic from "./components/Topic";
import List from "./components/List";
import Writer from "./components/Writer";
import Recomment from "./components/Recomment";

import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";

class Home extends PureComponent {
	handleScrollTop() {
		window.scrollTo( 0, 0 );
	}
	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
						<img className = "banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4824/066b16f3ca11cfb4f2a47b0ecc53010e0e5e5e95.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="image"/>
						<Topic/>
						<List/>
				</HomeLeft>
				<HomeRight>
						<Recomment/>
						<Writer/>
				</HomeRight>
				{ this.props.showScroll ? <BackTop onClick = { this.handleScrollTop }>顶部</BackTop> : null }
			</HomeWrapper>
			)
	}
	componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
	}
	componentWillUnmount() {
		window.removeEventListener( "scroll", this.props.changeScrollTopShow );
	}
	bindEvents() {
		window.addEventListener( "scroll", this.props.changeScrollTopShow );
	}
}

const mapState = ( state ) => ( {
	showScroll: state.getIn( [ "home", "showScroll" ] )
} );
const mapDispatch = ( dispatch ) => ( {
	changeHomeData() {
		dispatch(actionCreators.getHomeInfo());
	},
	changeScrollTopShow() {
		if( document.documentElement.scrollTop > 100 ) {
			dispatch( actionCreators.toggleToShow( true ) );
		}else {
			dispatch( actionCreators.toggleToShow( false ) );
		}
	}
} );
export default connect( mapState, mapDispatch )( Home );