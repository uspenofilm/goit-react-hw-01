import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profileContainer}>
      <div className={css.profileImgText}>
        <img src={image} alt="User avatar" className={css.profileImg} />
        <p className={css.profileName}>{name}</p>{" "}
        <p className={css.profileText}>@{tag}</p>
        <p className={css.profileText}>{location}</p>
      </div>
      <ul className={css.profileStats}>
        <li className={css.profileStatsEl}>
          <span>Followers</span>
          <span className={css.profileStatsNumber}>{stats.followers}</span>
        </li>
        <li className={css.profileStatsEl}>
          <span>Views</span>
          <span className={css.profileStatsNumber}>{stats.views}</span>
        </li>
        <li className={css.profileStatsEl}>
          <span>Likes</span>{" "}
          <span className={css.profileStatsNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
