const express = require('express');
const { followUser, unfollowUser, userFollowers, userFollowings, getMutualFollowers } = require('../controller/followController');
// const followController = require('../controller/followController');

const router = express.Router();

router.post('/follow', followUser);
router.post('/unfollow', unfollowUser);
router.get('/followers/:id', userFollowers);
router.get('/followings/:id', userFollowings);
router.get('/mutual/:follower_id/:following_id',getMutualFollowers);

module.exports = router;