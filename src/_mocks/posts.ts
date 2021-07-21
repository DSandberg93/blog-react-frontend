import { TPost } from 'types/post';

const posts: TPost[] = [
  {
    content: 'content',
    excerpt: 'excerpt',
    title: 'first',
    url: 'first',
  },
  {
    content: `Bacon ipsum dolor amet rump chicken chislic pork loin bresaola drumstick picanha brisket turducken jowl alcatra biltong filet mignon kevin t-bone. Sausage venison strip steak shankle. Picanha drumstick salami, pastrami kevin shank swine kielbasa tenderloin jerky. Bresaola cupim short ribs, pancetta corned beef t-bone buffalo pastrami.
Tenderloin sirloin chuck spare ribs cow burgdoggen. Turkey pork chop chislic sirloin fatback tri-tip. Ribeye buffalo filet mignon pork loin jowl boudin doner. Tongue leberkas landjaeger pork chop, venison beef kevin kielbasa picanha sausage shoulder corned beef andouille. Tongue biltong boudin pork belly, pork loin cupim bresaola chicken chislic. Picanha tenderloin meatball meatloaf, landjaeger jerky tongue. T-bone boudin bacon tri-tip.
Cupim doner kevin, turkey meatball shank chuck filet mignon. Strip steak alcatra pancetta pork loin, buffalo brisket porchetta beef ribs fatback doner prosciutto spare ribs corned beef picanha. Cow porchetta pork belly tri-tip, venison prosciutto burgdoggen ball tip. Flank andouille bacon, venison sausage pork belly meatball. Frankfurter jowl shankle pork loin, drumstick prosciutto kevin leberkas pork brisket fatback bacon pork chop.
Chuck turducken jerky, hamburger jowl rump ground round ham hock kielbasa kevin landjaeger. Corned beef chislic picanha andouille, ribeye cupim meatloaf fatback beef ribs ham spare ribs. T-bone doner alcatra, capicola prosciutto pork chop meatball beef ribs. Hamburger brisket burgdoggen drumstick flank.
Chislic andouille pig ball tip, brisket cupim alcatra doner landjaeger pancetta capicola. Burgdoggen cow tenderloin pork chop. Brisket bacon kevin t-bone meatball, shoulder leberkas pastrami pork. Short loin pork belly pig shank sausage hamburger pork turducken jerky turkey bacon bresaola. Pastrami short loin ball tip t-bone.`,
    excerpt: 'Bacon ipsum dolor amet rump chicken chislic pork loin bresaola drumstick picanha brisket turducken jowl',
    title: 'Bacon Ipsum',
    url: 'bacon-ipsum',
  },
];

export const getPosts = () => posts;

export const getPost = (url: string) => posts.find((existingPost) => existingPost.url === url);

export const addPost = (post: TPost) => {
  if (posts.findIndex((existingPost) => post.title === existingPost.title) >= 0) {
    return null;
  }
  const newPost = { ...post };
  posts.unshift(newPost);
  return newPost;
};

export const deletePost = (title: string) => {
  const index = posts.findIndex((existingPost) => existingPost.title === title);
  if (index >= 0) {
    return true;
  }
  return false;
};

export const updateMockPost = (post: TPost) => {
  const index = posts.findIndex((existingPost) => post.url === existingPost.url);
  if (index >= 0) {
    posts[index] = post;
    return post;
  }
  return false;
};
