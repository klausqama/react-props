import Post from "./Post.jsx"
export default function Blog(props) {
    const posts = [
        {
            id: 1,
            title: 'Titolo del Post',
            image: 'https://us02st2.zoom.us/static/6.3.28445/image/new/topNav/Zoom_logo.svg' /* compila questo campo */,
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
            tags: ['html', 'css'],
            published: true,
        },
        {
            id: 2,
            title: 'Titolo del Post',
            image: '' /* compila questo campo */,
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
            tags: ['js', 'css'],
            published: true,
        },
        {
            id: 3,
            title: 'Titolo del Post',
            image: '' /* compila questo campo */,
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
            tags: ['js', 'php'],
            published: true,
        },
        {
            id: 4,
            title: 'Titolo del Post',
            image: '' /* compila questo campo */,
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
            tags: ['html'],
            published: false,
        },
    ]
    return(
            <>
                {posts.map((post) => {
                    return (
                        <Post key={post.id} pippoFranco="VIVE" title={post.title} content={post.content} published={post.published} image={post.image} />
                    )
                })}
            </>
        );

        /**
         * oggetto anonimo {
         * 
         *  pippoFranco: "VIVE"
         *  title,
         *  content,
         *  image,
         *  published
         * 
         * }
         */
}
