export const getPostIds = () => {
    const savedPostIds = localStorage.getItem('saved_post')
        ? JSON.parse(localStorage.getItem('saved_post'))
        : [];

    return savedPostIds;
};

export const savePostIds = (postIdArr) => {
    if (postIdArr.length) {
        localStorage.setItem('saved_post', JSON.stringify(postIdArr));
    } else {
        localStorage.removeItem('saved_post');
    }
};

export const removePostId = (postId) => {
    const savedPostIds = localStorage.getItem('saved_post')
        ? JSON.parse(localStorage.getItem('saved_post'))
        : null;

    if (!savedPostIds) {
        return false;
    }

    const updatedSavedPostIds = savedPostIds?.filter((savedPostId) => savedPostId !== PostId);
    localStorage.setItem('saved_post', JSON.stringify(updatedSavedPostIds));

    return true;
};
