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


export default function Home() {
  return (
    <>
      <main>
        <article>
          <section>
            <nav>
              <ul className="flex justify-around items-center">
                <li className="border-2 border-green-400">
                <div className="flex items-center">
                  <span className="font-semibold text-2xl">NUEC</span>
                  <span>.com</span>
                </div>
                </li>
                <li className="border-2 border-orange-800 flex justify-center items-center">
                  <span>
                    <select name="" id="">
                      <option value="All">All</option>
                      <option value="Appliences">Appliences</option>
                      <option value="App&Games">App & Games</option>
                      <option value="Books">Books</option>
                      <option value="Beauty">Beauty</option>
                      <option value="Baby">Baby</option>
                    </select>
                  </span>
                  <span>
                    <input type="search" name="" id="" />
                  </span>
                  <button type="submit">
                    <Image
                      src="/Img/search.png"
                      width={30}
                      height={10}
                      alt="" />
                  </button>
                </li>
                <li className="border-2 border-red-800">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="flex flex-col">
                        <span>Hello, Sign In</span>
                        <Button variant="outline">Account and List</Button>
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
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
                </li>
                <li className="border-2 border-blue-500">
                  <div className="flex justify-center items-center">
                    <Image
                      src="/Img/cart.png"
                      width={35}
                      height={20}
                      alt="" />
                    <span>Cart</span>
                  </div>
                </li>
              </ul>
            </nav>
          </section>
        </article>
      </main>
    </>
  );
}


