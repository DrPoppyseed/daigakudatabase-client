import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  profileItemContainer: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(4),
  },
  profileSummaryContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileTextArea: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: theme.spacing(4),
    flexGrow: 1,
  },
  profileUserNameContainer: {},
  profileUserName: {},
  profileUserSchoolContainer: {},
  profileUserProfileTextContainer: {},
  profileUserProfileText: {},
  editIconContainer: {
    alignSelf: 'flex-start',
    margin: -theme.spacing(2),
  },
  editIcon: {},
}))

export default useStyles

/**
 * profileSummaryContainer,
 * profileItemContainer,
 * profileImageArea,
 * profileImageContainer,
 * profileTextArea,
 * profileUserNameContainer,
 * profileTextItem,
 * profileUserSchoolContainer,
 * profileUserSchool
 * profileUserProfileTextContainer,
 * profileUserProfileText
 * editIconContainer,
 * editIcon
 */
