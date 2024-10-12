import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";


export default function Home() {
  return (
    <>
      <main>
        <article>
          <section>
            <nav>
              <ul className="flex items-center bg-gray-900 py-2">
                <div className="sm:w-[70vw] px-3 flex justify-center items-center">
                  <li className="w-[20%] hover:cursor-pointer">
                    <Link href="/" className="flex justify-center items-center gap-x-1">
                      <div>
                        <Image
                          className="rounded"
                          src="/Img/main.png"
                          width={50}
                          height={10}
                          alt="Main Img" />
                      </div>
                      <div className="justify-center flex items-center">
                        <span className="font-semibold text-3xl">NUEC</span>
                        <span>.com</span>
                      </div>
                    </Link>
                  </li>
                  <li className="w-[80%] flex justify-center items-center">
                    <span>
                      <select className="p-[8.3px] rounded-tl hover:cursor-pointer rounded-bl bg-gray-300 w-16 text-gray-700" name="" id="">
                        <option value="All">All</option>
                        <option value="Appliences">Appliences</option>
                        <option value="App&Games">App & Games</option>
                        <option value="Books">Books</option>
                        <option value="Beauty">Beauty</option>
                        <option value="Baby">Baby</option>
                      </select>
                    </span>
                    <span className=" w-[80%] -blue-600">
                      <input className="w-[100%] p-2 text-gray-700" placeholder="Search NUEC.com" type="search" name="" id="" />
                    </span>
                    <button type="submit" className="p-[5px] rounded-tr rounded-br bg-blue-500">
                      <Image
                        src="/Img/search.png"
                        width={30}
                        height={10}
                        alt="" />
                    </button>
                  </li>
                </div>
                <div className="sm:w-[30vw] flex justify-evenly items-center">
                  <li>
                    <select name="" id="" className="hover:outline hover:p-1 hover:rounded font-semibold text-base hover:cursor-pointer bg-gray-900">
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                    </select>
                  </li>
                  <li>
                    <div className="text-center">
                      <div className="hover:cursor-pointer hover:outline hover:p-1 hover:rounded">
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <div className="text-sm">Hello, sign in</div>
                            <div className="parent-element font-semibold">Account & Lists</div>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56 bg-gray-900">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                              <DropdownMenuItem>
                                Profile
                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                Billing
                                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                Settings
                                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                Keyboard shortcuts
                                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                              </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                              <DropdownMenuItem>Team</DropdownMenuItem>
                              <DropdownMenuSub>
                                <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                  <DropdownMenuSubContent>
                                    <DropdownMenuItem>Email</DropdownMenuItem>
                                    <DropdownMenuItem>Message</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>More...</DropdownMenuItem>
                                  </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                              </DropdownMenuSub>
                              <DropdownMenuItem>
                                New Team
                                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                              </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>GitHub</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuItem disabled>API</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              Log out
                              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                    {/* <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <div className="flex flex-col items-center">
                          <span>Hello, Sign In</span>
                          <Button className="bg-gray-900 hover:bg-blue-500">Account and List</Button>
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56 bg-gray-900">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            Profile
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            Billing
                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            Settings
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            Keyboard shortcuts
                            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>Team</DropdownMenuItem>
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent>
                                <DropdownMenuItem>Email</DropdownMenuItem>
                                <DropdownMenuItem>Message</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>More...</DropdownMenuItem>
                              </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                          </DropdownMenuSub>
                          <DropdownMenuItem>
                            New Team
                            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>GitHub</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuItem disabled>API</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          Log out
                          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu> */}
                  </li>
                  <li className="hover:cursor-pointer hover:bg-blue-500 p-2 rounded">
                    <div className="flex justify-center items-center">
                      <Image
                        src="/Img/cart.png"
                        width={35}
                        height={20}
                        alt="" />
                      <span>Cart</span>
                    </div>
                  </li>
                </div>
              </ul>
            </nav>
          </section>
        </article >
      </main >
    </>
  );
}


