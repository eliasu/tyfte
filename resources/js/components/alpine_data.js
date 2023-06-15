/**
 * Alpine x-data extends
 * import with "import * as alpine from './components/alpine_data';"
**/

import * as ani from "./textify";
import Animations from '../c-textify/src/index';

const infoTitle = document.querySelector('#info-title');

export const accordion_states = () => ({
	textAni: '',
	headlineAni: '',
	headline: '',
	
	get open() {
		const isSelectedInParent = (this.$el == this.$data.selected);
		return isSelectedInParent;
  	},
  
	init() {
		// const allAnimations = [...ani.accordion_no_obs.animations, ...ani.ani2.animations];
		const allAnimations = [...ani.accordion_no_obs.animations, ...ani.infoTitleAnim.animations];
		const aniTarget = this.$el.querySelector('p');

		this.$watch('open', value => this.open ? this.setOpen(this) : this.setClose(this) );

		const matchingAniText = allAnimations.find(el => el.element == aniTarget);
		const matchingHeadlineAni = allAnimations.find(el => el.element == infoTitle);

		this.textAni = matchingAniText;     
		this.headlineAni = matchingHeadlineAni;     
		this.headline = this.$el.dataset.headline;
	},

	setOpen(elem){
		elem.textAni.animateIn()
		this.setHeadline(elem)
	},
	
	setClose(elem){
		elem.textAni.animateOut()
	},

	handleClick() {
		this.$data.selected = this.$el;
	},

	// handle all updates and animations
	setHeadline(elem) {
		// if the headline is allready the right one return
		if(infoTitle.innerText == elem.headline)
			return

		// animate out
		elem.headlineAni.animateOut()
		
		// then wait 800ms …
		setTimeout(function () { 
			
			// change the text
			// infoTitle.innerText = elem.headline;
			
			// and animate back in
			elem.headlineAni.animateIn()
		} , 800);	
	}
 
});

