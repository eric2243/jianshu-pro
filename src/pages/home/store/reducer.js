import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS ( {
	topicList: [],
	articleList: [],
	recommentList: [],
	articlePage: 1,
	showScroll: false
})

const addArticleList = (state, action) => {
	return state.merge({
		"articleList": state.get("articleList").concat(action.list),
		"articlePage": action.nextPage
	});	
}

const changeHomeData = (state, action) => {
	return state.merge({
		topicList: fromJS(action.topicList),
		articleList: fromJS(action.articleList),
		recommentList: fromJS(action.recommentList)
	});
}

export default ( state = defaultState, action ) => {
	switch( action.type ) {
		case constants.TOGGLE_SCROLL_TOP:
			return state.set( "showScroll", action.show )
		case constants.CHANGE_HOME_DATA:
			return changeHomeData(state, action);
		case constants.ADD_ARTICLE_LIST:
			return addArticleList(state, action);
		default:
			return state;
	}
}