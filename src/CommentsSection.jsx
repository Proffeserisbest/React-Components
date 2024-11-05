import React from 'react';
import styles from './CommentsSection.module.scss';

const commentsData = [
  {
    id: 1,
    author: 'Noman Afzal',
    relation: '3rd+',
    profilePic: 'noman.jpg', // Replace with actual image path
    title: 'Fronted Developer Learner stage || HTML || CSS || JavaScript || Git || GitHub || ...',
    timeAgo: '5d',
    comment: `Bro in this era. On freelancing platforms most of the small businesses prefer WordPress or other CMS platform websites. Also in the direct client hunting people prefer WordPress it is cheap relative to custom websites. I am in the fronted developer learning stage. what's your point of view on that. If anyone have freelancing experience. Please guide me it really helpful for me.`,
    replies: [
      {
        id: 2,
        author: 'Syed Abdul Momin',
        relation: 'Author',
        profilePic: 'syed.jpg', // Replace with actual image path
        title: 'Angular Expert | Sr. Frontend Developer | Crafting Seamless User Experiences',
        timeAgo: '4d',
        comment: `Noman Afzal There is definitely more work available in freelancing with WordPress or Shopify, but there are also many people in that category. That's why it's important to become an expert in this area so that you can increase your value in the freelancing market.`,
      },
      {
        id: 3,
        author: 'Noman Afzal',
        relation: '3rd+',
        profilePic: 'noman.jpg', // Replace with actual image path
        title: 'Fronted Developer Learner stage || HTML || CSS || JavaScript || Git || GitHub || ...',
        timeAgo: '4d',
        comment: 'Syed Abdul Momin thanks ❤️',
      },
    ],
  },
  {
    id: 4,
    author: 'Amir Hussain',
    relation: '3rd+',
    profilePic: 'amir.jpg', // Replace with actual image path
    title: 'Furniture Salesperson at Furniture House',
    timeAgo: '5d',
    comment: 'web development services?',
  },
];

const CommentsSection = () => {
  return (
    <div className={styles.commentsSection}>
      <input className={styles.commentInput} placeholder="Add a comment..." />
      <div className={styles.filter}>Most relevant ▼</div>
      {commentsData.map((comment) => (
        <div className={styles.comment} key={comment.id}>
          <img src={comment.profilePic} alt={comment.author} className={styles.profilePic} />
          <div className={styles.commentBody}>
            <div className={styles.commentHeader}>
              <strong>{comment.author}</strong> <span className={styles.relation}>· {comment.relation}</span>
              <span className={styles.timeAgo}>{comment.timeAgo}</span>
            </div>
            <div className={styles.commentTitle}>{comment.title}</div>
            <div className={styles.commentText}>{comment.comment}</div>
            <div className={styles.commentActions}>
              <span>Like</span> · <span>Reply</span> · <span>{comment.replies ? comment.replies.length : 0} Replies</span>
            </div>
            {comment.replies && comment.replies.map((reply) => (
              <div className={styles.reply} key={reply.id}>
                <img src={reply.profilePic} alt={reply.author} className={styles.profilePic} />
                <div className={styles.replyBody}>
                  <div className={styles.commentHeader}>
                    <strong>{reply.author}</strong> <span className={styles.relation}>· {reply.relation}</span>
                    <span className={styles.timeAgo}>{reply.timeAgo}</span>
                  </div>
                  <div className={styles.commentTitle}>{reply.title}</div>
                  <div className={styles.commentText}>{reply.comment}</div>
                  <div className={styles.commentActions}>
                    <span>Like</span> · <span>Reply</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsSection;
