import socialNetworkImg from "../assets/images/ProjectsPh/social-network.jpg";
import todoListImg from "../assets/images/ProjectsPh/todoList.png";
import counterImg from "../assets/images/ProjectsPh/counter.jpg";
import portfolioImg from "../assets/images/ProjectsPh/portfolio.jpg";


export const backgroundProjectsImgCombiner = {
    social: () => ({backgroundImage: `url(${socialNetworkImg})`}),
    todoList: () => ({backgroundImage: `url(${todoListImg})`}),
    counter: () => ({backgroundImage: `url(${counterImg})`}),
    portfolio: () => ({backgroundImage: `url(${portfolioImg})`}),
}




