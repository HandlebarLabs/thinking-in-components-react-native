import PropTypes from 'prop-types';

export const ButtonPrimary = () => null;
export const ButtonSecondary = () => null;

ButtonSecondary.propTypes = {
  border: PropTypes.bool,
};

ButtonSecondary.defaultProps = {
  border: true,
};

export const ButtonContainer = () => null;
ButtonContainer.propTypes = {
};

ButtonContainer.defaultProps = {
  align: 'left',
};
