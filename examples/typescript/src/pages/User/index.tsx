import { UserResource, Address } from 'data/models';
import { hooks } from 'rest-hooks';
import { RouteChildrenProps } from 'react-router';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function capFirst(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function AddressTable({ address }: { address: Address }) {
  return (
    <Paper>
      <Table>
        <TableBody>
          {Object.entries(address).map(([key, value]: [string, any]) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {capFirst(key)}
              </TableCell>
              <TableCell align="right">{value.toString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
export default function User({ match }: RouteChildrenProps<{ id: string }>) {
  let id = 1;
  if (match && match.params && match.params.id) {
    id = Number.parseInt(match.params.id);
  }
  const author = hooks.useResource(UserResource.singleRequest(), { id });
  return (
    <>
      <Typography variant="h5" component="h3" style={{ flex: '1 1 50%' }}>
        {author.name}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {author.email}
        <br />
        {author.phone}
        <br />
        <a href={`https://${author.website}`}>{author.website}</a>
      </Typography>
      {author.address ? <AddressTable address={author.address} /> : null}
    </>
  );
}