import axios from 'axios';
export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:
    {
        Authorization:'Bearer JhZAcy0KQWTDjxVNwWeoD_cwVQMXMdDTNEnVjXu3zfwHQq0PNMIvkKQ34X1uFZ-wu1M7jfm6UM0_056R4AtUMmEWkUZGpZ9Kq5PbdDKNn_62PxUHSHK6Sl5J6VfeXXYx'
    }
});