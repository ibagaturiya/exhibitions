// Deletes every show in shows/ whose show.json "expires" date has passed.
// Prints how many were removed to $GITHUB_OUTPUT, so the workflow can clear the history.
import fs from 'fs';
const removed = [];
for (const id of fs.readdirSync('shows')) {
  const file = `shows/${id}/show.json`;
  if (!fs.existsSync(file)) continue;
  try {
    const { expires } = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (expires && Date.parse(expires) <= Date.now()) { fs.rmSync(`shows/${id}`, { recursive: true }); removed.push(id); }
  } catch (err) { console.warn(id, err.message); }
}
console.log(removed.length ? `Removed: ${removed.join(', ')}` : 'Nothing expired.');
if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `removed=${removed.length}\n`);
