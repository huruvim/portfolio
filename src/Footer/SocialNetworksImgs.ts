import tlgImg from './../assets/images/SocialNetPh/tlg.png';
import fbImg from './../assets/images/SocialNetPh/fb.png';
import ghImg from './../assets/images/SocialNetPh/gh.png';
import ldImg from './../assets/images/SocialNetPh/ld.png';

export const backgroundSocialImgCombiner = {
    telegramImg: () => ({backgroundImage: `url(${tlgImg})`}),
    facebookImg: () => ({backgroundImage: `url(${fbImg})`}),
    gitHubImg: () => ({backgroundImage: `url(${ghImg})`}),
    linkedinImg: () => ({backgroundImage: `url(${ldImg})`}),
}




