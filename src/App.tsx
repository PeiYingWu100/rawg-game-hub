import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav"
              "main"`,
        lg: `"nav nav"
            "sidebar main"`,
      }}
    >
      <GridItem area={"nav"} bg="pink">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area={"sidebar"} bg="green">
          SideBar
        </GridItem>
      </Show>
      <GridItem area={"main"} bg="blue">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
