import React from "react";
import { Accordion } from "flowbite-react";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
type Props = {};

const productDetails: any = {
  features: [
    {
      description: "This is the first feature.",
    },
    {
      description: "This is the second feature.",
    },
  ],
  productCare: {
    instructions: "Take care of your product by following these instructions.",
  },
  shippingAndReturns: {
    policy:
      "Our shipping and returns policy is straightforward and hassle-free.",
  },
  warranty: {
    details: "This product comes with a warranty for peace of mind.",
    period: 12,
  },
};

const CustomAccordion = (props: Props) => {
  return (
    <Accordion
      collapseAll={true}
      alwaysOpen={true}
      className="custom-accordion"
    >
      <Accordion.Panel>
        <Accordion.Title>Features</Accordion.Title>
        <Accordion.Content>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            {productDetails.features.map((feature: any, index: number) => (
              <li key={index}>
                <span>{feature.description}</span>
              </li>
            ))}
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Product care</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            {productDetails.productCare.instructions}
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Shipping & Returns</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            {productDetails.shippingAndReturns.policy}
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Warranty</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            {productDetails.warranty.details}
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default CustomAccordion;
