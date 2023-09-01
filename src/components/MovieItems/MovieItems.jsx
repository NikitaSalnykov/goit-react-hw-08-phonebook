import { Link, useLocation } from 'react-router-dom';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { ListItems, ReadMore, ScoreAvatar } from './MovieItems.styled';
import PropTypes from 'prop-types';
import { Score } from 'components/pages/MovieDetails/MovieDetails.styled';
import { getScoreColor } from 'helpers/helpers';

export const MovieItems = ({ array }) => {
  const location = useLocation();

  const shortenedOverview = overview => {
    return overview.length > 240
      ? overview.split(' ').slice(0, 40).join(' ') + '...'
      : overview;
  };

  return (
    <>
      {array.map(
        (
          {
            title,
            name,
            overview,
            id,
            vote_average,
            release_date,
            poster_path = 'https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg',
          },
          index
        ) => (
          <ListItems key={id}>
            <ListItemAvatar
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <Avatar
                alt={title || name}
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w200/${poster_path}`
                    : 'https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg'
                }
              />
              {vote_average !== 0 && (
                <ScoreAvatar>
                  <Score color={getScoreColor(vote_average)}>
                    {Math.round(vote_average * 10)}
                  </Score>
                </ScoreAvatar>
              )}
            </ListItemAvatar>
            <Link to={`/movies/${id}`} state={location}>
              <ListItemText
                primary={
                  index + 1
                    ? `#${index + 1} ${title || name}`
                    : `${title || name}`
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {release_date
                        ? `Release: ${release_date.slice(0, 4)}`
                        : ''}
                    </Typography>
                    {` ${shortenedOverview(overview)}`}
                    {overview.length > 240 && <ReadMore>Read more</ReadMore>}
                  </React.Fragment>
                }
              />
            </Link>
          </ListItems>
        )
      )}
    </>
  );
};

MovieItems.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string,
      overview: PropTypes.string,
      release_date: PropTypes.string,
      poster_path: PropTypes.string,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
