## Just for fun

### High level

I wanted to try out a couple frontend tools and see how quickly I could make something which looks and functions well.
Part of my interest in creating this was to see how Next 14 and server components work with client libraries.

- I chose [shadcn](https://ui.shadcn.com/), a component library, with tailwind to quickly and easily make this look nice.
- I chose [tanstack table](https://tanstack.com/table/latest) to quickly add common table features, such as column sorting and filtering.
- I chose to write tests with jest and react-testing-library because they are familiar and work well.

## Deployment

- The project is deployed at https://coinlist-rouge-three.vercel.app/

## Potential improvements

- One of the benefits of using tailwind with shadcn is the easy of configuring a design system. I did not utilize this feature in this repo (thus far) but it's a powerful way (if done right) to obtain visual consistency across the UI.

- I have not considered responsive design in this experiment which would be a substantial improvement.

- Using a newer test running tool could improve how the frontend scales, such as Vitest.
