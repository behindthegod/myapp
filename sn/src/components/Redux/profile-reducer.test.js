import profileReducer, {addPostActionCreator} from "./profile-reducer";

it('new post should be added ',  () => {
    let action = addPostActionCreator("Privet!!");
    let state = {
        posts: [
            {id: 1, post: "Привет, как дела?", likesCount: 12},
            {id: 2, post: "Все отлично-все нормально", likesCount: 144}
        ]
    };
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
    expect(newState.posts[2].post).toBe("Privet!!");
});

it('new post should ',  () => {
    let action = addPostActionCreator("Privet!!");
    let state = {
        posts: [
            {id: 1, post: "Привет, как дела?", likesCount: 12},
            {id: 2, post: "Все отлично-все нормально", likesCount: 144}
        ]
    };
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});