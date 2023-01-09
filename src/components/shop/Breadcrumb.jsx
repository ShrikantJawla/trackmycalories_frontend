import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { BiChevronRight } from 'react-icons/bi'
import React from 'react'
import { Link } from 'react-router-dom'

const CustomBreadcrumb = () => {
  return (
    <Breadcrumb
      w="full"
      fontSize={18}
      spacing="8px"
      separator={<BiChevronRight color="gray.500" />}
    >
      <BreadcrumbItem>
        <Link to="/cart">Cart</Link>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink fontWeight={600}>About</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <Link to="/tmc-shop">Home</Link>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export default CustomBreadcrumb
