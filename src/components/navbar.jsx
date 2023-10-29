import React from 'react'
import cartwidget from './cartwidget'
import {Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer} from @chakra-ui/

const navbar = () => {
    return (
        <div>
            <Flex>
                <Box p='4' >
                    <h3>Brand</h3>
                </Box>
                <Spacer />
                <Spacer />
                <Box p='4' >
                    <cartwidget />
                </Box>
            </Flex>
            <Menu>
                <MenuButton>
                    Categorias
                </MenuButton>
                <MenuList>
                    <MenuItem>A</MenuItem>
                    <Menuitem>B</Menuitem>
                    <MenuItem>C</MenuItem>    
                </MenuList>
            </Menu>
            <h3>brand</h3>
            navbar
            <cartwidget />
        </div>
    )
}

export default navbar