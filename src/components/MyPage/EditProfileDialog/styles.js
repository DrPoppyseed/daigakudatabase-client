import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  dialogContent: {
    padding: theme.spacing(4),
  },
  topContentContainer: {
    marginBottom: theme.spacing(4),
  },
  topContentArea: {
    display: 'flex',
    alignItems: 'center',
  },
  topContentTitle: {
    marginBottom: theme.spacing(2),
  },
  editProfileImageArea: {
    flexGrow: 1,
  },
  editProfileImage: {
    borderRadius: theme.spacing(10),
  },
  topTextArea: {
    // flexGrow: 1,
    marginLeft: theme.spacing(4),
  },
  fieldContainer: {
    marginBottom: theme.spacing(4),
  },
  nameFieldContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  nameField: {
    width: '100%',
  },
  lastNameField: {
    marginRight: theme.spacing(2),
  },
  schoolField: {
    width: '100%',
  },
  profileText: {
    width: '100%',
  },
  messageContentTitle: {
    marginBottom: theme.spacing(2),
  },
  dialogActions: {
    padding: theme.spacing(2),
  },
  cancelButton: {
    marginRight: theme.spacing(1),
  },
}))

export default useStyles
