# Satellite Chasers API

Boomers would love this if they knew how to use the internet.

## Getting started

Create a file named `.env` in the root directory of this repo using the template below.

```
PORT=3000
JWT_SECRET=...
```

You may use any `PORT` / `JWT_SECRET` you want when running locally.

## Contributing

When creating the need for a new environment variable, the relevant PR must also update the `.env` template above and the `production secrets` steps below.

## CI/CD

The current deployment process consists of building a Docker image and pushing it to Fly.io; automatic deploys are enabled via GitHub Actions. For more information, [follow this guide on Fly.io](https://fly.io/docs/app-guides/continuous-deployment-with-github-actions/) to see how this was setup.

### Fly.io configuration

In the event that the associated Fly.io account needs to be changed, follow the directions below.

#### Update the GitHub Actions Secret for `FLY_API_TOKEN`
1. [Install the Fly.io CLI](https://fly.io/docs/hands-on/install-flyctl/)
2. Login to the appropriate Fly.io account with `fly auth login`
3. Generate a new secret token with `fly tokens create deploy -x 999999h`
4. Update the repo secret in Settings > Secrets > Actions

#### Create production secrets via Fly CLI
1. `fly secrets set JWT_SECRET=<your-jwt-secret>`
