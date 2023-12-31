import Theme from 'rspress/theme';

const Layout = () => (
    <Theme.Layout
        bottom = {<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "1b884eb003234b8a92fad222c422023d"}'></script>}
    />
);

export default {
    ...Theme,
    Layout,
};

export * from 'rspress/theme';
